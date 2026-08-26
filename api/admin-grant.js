/* ===================================================================
   Vercel Serverless Function: POST /api/admin-grant

   Grants course access to someone who paid outside Razorpay — UPI,
   WhatsApp, bank transfer, cash at a workshop. Those payments have no
   Razorpay Payment ID, so /api/restore-access cannot help them and there
   was previously no way at all to give a paying customer their course.

   Produces the same signed token a real purchase produces, so everything
   downstream (videos, bonuses, progress) behaves identically.

   Requires ADMIN_SECRET to be set in the Vercel environment. Without it
   the endpoint refuses every request rather than defaulting to open.

   Body:  { secret, courseId, email?, note? }
   200 →  { success, token, link }
   401 →  wrong or missing secret
   503 →  ADMIN_SECRET not configured
   =================================================================== */

const crypto = require('crypto');
const { issueAccessToken, applyCors } = require('./_access');

const VALID_COURSES = ['ai-basics', 'prompt-eng', 'ai-freelancing', 'earn-ai', 'ai-trading'];

/* Constant-time compare so the secret cannot be discovered by timing. */
function secretMatches(given) {
  const expected = process.env.ADMIN_SECRET;
  if (!expected) return null;               // not configured
  const a = Buffer.from(String(given || ''), 'utf8');
  const b = Buffer.from(expected, 'utf8');
  if (a.length !== b.length) return false;  // length differs → cannot match
  return crypto.timingSafeEqual(a, b);
}

module.exports = async function handler(req, res) {
  applyCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { secret, courseId, email, note } = req.body || {};

  const ok = secretMatches(secret);
  if (ok === null) {
    return res.status(503).json({
      error: 'ADMIN_SECRET is not set. Add it in Vercel → Settings → Environment Variables, then redeploy.',
    });
  }
  if (!ok) {
    console.warn('admin-grant: rejected attempt');
    return res.status(401).json({ error: 'Invalid admin secret.' });
  }

  if (!VALID_COURSES.includes(courseId)) {
    return res.status(400).json({ error: `Unknown course. Use one of: ${VALID_COURSES.join(', ')}` });
  }

  // Recorded in the token so a manual grant is always distinguishable from a
  // Razorpay purchase when auditing later.
  const marker = `manual:${(note || 'admin-grant').slice(0, 40)}`;
  const token = issueAccessToken({ courseId, email: email || '', paymentId: marker });
  if (!token) return res.status(500).json({ error: 'Could not issue token.' });

  console.log(`admin-grant: ${courseId} → ${email || '(no email)'} [${marker}]`);

  const base = 'https://www.aifreedom.in';
  const link = `${base}/course-player?course=${encodeURIComponent(courseId)}&grant=${encodeURIComponent(token)}`;

  return res.status(200).json({ success: true, courseId, email: email || null, token, link });
};
