/* ===================================================================
   Vercel Serverless Function: POST /api/create-order
   Creates a Razorpay order and returns { order_id, amount, currency }
   KEY_SECRET is server-side only — never exposed to the browser.
   =================================================================== */

const Razorpay = require('razorpay');
const { minPriceFor } = require('./_access');

module.exports = async function handler(req, res) {
  // CORS headers (allow same-origin by default on Vercel)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount, currency = 'INR', receipt, courseName, courseId, email } = req.body || {};

  // Validate amount (minimum 100 paise = ₹1)
  const parsedAmount = parseInt(amount, 10);
  if (!parsedAmount || parsedAmount < 100) {
    return res.status(400).json({ error: 'Amount must be at least 100 paise (₹1).' });
  }

  // The amount arrives from the browser, so without this a crafted request
  // could open a ₹1 order for a ₹499 course and still receive full access.
  // A floor rather than a fixed price keeps genuine flash sales working.
  if (courseId) {
    const min = minPriceFor(courseId);
    if (min !== null && parsedAmount < min) {
      console.warn(`Rejected underpriced order: ${courseId} at ${parsedAmount} (min ${min})`);
      return res.status(400).json({ error: 'Invalid amount for this course.' });
    }
  }

  // Validate credentials
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    console.error('Razorpay credentials missing from environment variables.');
    return res.status(500).json({ error: 'Payment gateway not configured.' });
  }

  try {
    const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });

    const order = await razorpay.orders.create({
      amount: parsedAmount,
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      // courseId is recorded so entitlement can be re-verified later straight
      // from Razorpay — this project has no database of its own.
      notes: {
        courseName: courseName || '',
        courseId: courseId || '',
        email: email || '',
      },
    });

    return res.status(200).json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      key_id: keyId, // Safe — this is the PUBLIC key
    });
  } catch (err) {
    console.error('Razorpay create-order error:', err);
    if (err.statusCode === 401) {
      return res.status(401).json({ error: 'Payment gateway authentication failed.' });
    }
    return res.status(500).json({ error: 'Failed to create payment order. Please try again.' });
  }
};
