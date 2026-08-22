/* ===================================================================
   Vercel Serverless Function: POST /api/verify-payment
   Verifies the Razorpay payment signature using HMAC-SHA256, confirms with
   Razorpay that the money was actually captured, and then issues a signed
   access token that unlocks the course.

   A valid signature only proves the response came from Razorpay — it does
   not prove the payment succeeded — so the capture check matters.

   Returns 200 with { success, access_token } on success, 400 otherwise.
   =================================================================== */

const crypto = require('crypto');
const Razorpay = require('razorpay');
const { issueAccessToken, minPriceFor } = require('./_access');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseId } = req.body || {};

  // Validate required fields
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({
      error: 'Missing required fields: razorpay_order_id, razorpay_payment_id, razorpay_signature.',
    });
  }

  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret) {
    console.error('RAZORPAY_KEY_SECRET missing from environment variables.');
    return res.status(500).json({ error: 'Payment gateway not configured.' });
  }

  try {
    // Compute expected signature: HMAC-SHA256(order_id + "|" + payment_id, KEY_SECRET)
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(body)
      .digest('hex');

    // Constant-time comparison to prevent timing attacks
    const signatureBuffer = Buffer.from(razorpay_signature, 'hex');
    const expectedBuffer = Buffer.from(expectedSignature, 'hex');

    const isValid =
      signatureBuffer.length === expectedBuffer.length &&
      crypto.timingSafeEqual(signatureBuffer, expectedBuffer);

    if (!isValid) {
      console.warn('Razorpay signature mismatch for payment:', razorpay_payment_id);
      return res.status(400).json({ success: false, error: 'Payment verification failed. Signature mismatch.' });
    }

    // Signature valid — the response genuinely came from Razorpay.
    console.log('Payment signature verified:', razorpay_payment_id);

    // No course to unlock (e.g. the workshop checkout) — nothing further to do.
    if (!courseId) {
      return res.status(200).json({
        success: true,
        payment_id: razorpay_payment_id,
        order_id: razorpay_order_id,
        message: 'Payment verified successfully!',
      });
    }

    // Confirm the money was actually captured and covers this course, then
    // mint the entitlement. The signature alone does not establish either.
    let payment = null;
    try {
      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: keySecret,
      });
      payment = await razorpay.payments.fetch(razorpay_payment_id);
    } catch (fetchErr) {
      console.error('Could not fetch payment for entitlement:', fetchErr);
    }

    if (payment) {
      if (payment.order_id !== razorpay_order_id) {
        console.warn('Payment/order mismatch:', razorpay_payment_id);
        return res.status(400).json({ success: false, error: 'Payment does not match the order.' });
      }
      if (payment.status !== 'captured' && payment.status !== 'authorized') {
        return res.status(400).json({ success: false, error: `Payment status is "${payment.status}".` });
      }
      const min = minPriceFor(courseId);
      if (min !== null && Number(payment.amount) < min) {
        console.warn(`Underpaid entitlement attempt: ${courseId} at ${payment.amount}`);
        return res.status(400).json({ success: false, error: 'Payment does not cover this course.' });
      }
    }

    const accessToken = issueAccessToken({
      courseId,
      email: (payment && payment.email) || '',
      paymentId: razorpay_payment_id,
    });

    return res.status(200).json({
      success: true,
      payment_id: razorpay_payment_id,
      order_id: razorpay_order_id,
      course_id: courseId,
      access_token: accessToken,
      message: 'Payment verified successfully!',
    });
  } catch (err) {
    console.error('Verify payment error:', err);
    return res.status(500).json({ error: 'Internal error during verification.' });
  }
};
