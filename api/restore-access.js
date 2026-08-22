/* ===================================================================
   Vercel Serverless Function: POST /api/restore-access

   Access tokens live in the buyer's browser, so a customer who pays on a
   phone and later opens the course on a laptop would otherwise be locked
   out of something they paid for. This re-issues their token.

   Proof of purchase is the Razorpay Payment ID, which Razorpay emails to the
   buyer and which is also shown on the success screen. It is looked up
   against the live Razorpay API — there is no database in this project, and
   Razorpay is the source of truth anyway.

   Payment ID is required rather than just email on purpose: an email-only
   lookup would hand access to anyone who could guess a buyer's address.

   Body:  { paymentId, courseId }
   200 →  { success: true, token }
   400 →  { error } when the payment is not captured, not for this course,
          or does not exist
   =================================================================== */

const Razorpay = require('razorpay');
const { issueAccessToken, minPriceFor, applyCors } = require('./_access');

module.exports = async function handler(req, res) {
  applyCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { paymentId, courseId } = req.body || {};

  if (!paymentId || typeof paymentId !== 'string' || !/^pay_[A-Za-z0-9]+$/.test(paymentId.trim())) {
    return res.status(400).json({ error: 'Enter a valid Payment ID — it looks like pay_XXXXXXXXXXXX.' });
  }
  if (!courseId) return res.status(400).json({ error: 'Missing courseId.' });

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    console.error('Razorpay credentials missing from environment variables.');
    return res.status(500).json({ error: 'Payment gateway not configured.' });
  }

  try {
    const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });
    const payment = await razorpay.payments.fetch(paymentId.trim());

    if (!payment) return res.status(400).json({ error: 'Payment not found.' });

    // Authorised-but-not-captured means the money was never actually taken.
    if (payment.status !== 'captured') {
      return res.status(400).json({
        error: `This payment is "${payment.status}", not captured. If you were charged, email info@aifreedom.in with the Payment ID.`,
      });
    }

    // The payment must belong to this course, not a different (cheaper) one.
    const paidCourse = (payment.notes && (payment.notes.courseId || payment.notes.course_id)) || null;
    if (paidCourse && paidCourse !== courseId) {
      return res.status(400).json({ error: 'This payment was for a different course.' });
    }

    // Older payments (made before courseId was recorded in notes) are accepted
    // only when the amount covers this course's minimum price.
    if (!paidCourse) {
      const min = minPriceFor(courseId);
      if (min !== null && Number(payment.amount) < min) {
        return res.status(400).json({ error: 'This payment does not cover this course.' });
      }
    }

    const token = issueAccessToken({
      courseId,
      email: payment.email || '',
      paymentId: payment.id,
    });
    if (!token) return res.status(500).json({ error: 'Could not issue access token.' });

    return res.status(200).json({ success: true, token, email: payment.email || null });
  } catch (err) {
    // Razorpay returns 400 for an unknown payment id.
    if (err && (err.statusCode === 400 || err.statusCode === 404)) {
      return res.status(400).json({ error: 'No payment found with that ID. Check it and try again.' });
    }
    console.error('restore-access error:', err);
    return res.status(500).json({ error: 'Could not verify that payment. Please try again.' });
  }
};
