/* ===================================================================
   Vercel Serverless Function: POST /api/verify-payment
   Verifies Razorpay payment signature using HMAC-SHA256.
   Returns 200 on success, 400 on signature mismatch.
   =================================================================== */

const crypto = require('crypto');

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

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body || {};

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

    // Signature valid — payment is authentic
    console.log('Payment verified successfully:', razorpay_payment_id);
    return res.status(200).json({
      success: true,
      payment_id: razorpay_payment_id,
      order_id: razorpay_order_id,
      message: 'Payment verified successfully!',
    });
  } catch (err) {
    console.error('Verify payment error:', err);
    return res.status(500).json({ error: 'Internal error during verification.' });
  }
};
