/* ===================================================================
   Shared helpers for course entitlement.

   Filenames starting with "_" are not routed by Vercel, so this is a
   private module rather than an endpoint.

   Why this exists: entitlement used to be a plain localStorage flag, which
   meant `localStorage.setItem('af_paid_ai-basics','1')` in the console
   unlocked a paid course. Access is now a token the server signs and only
   the server can validate, so it cannot be forged in the browser.
   =================================================================== */

const crypto = require('crypto');

/* Minimum legitimate price per course, in paise. The browser sends the
   amount, so without this a crafted request could buy a ₹499 course for ₹1.
   A minimum (rather than a fixed price) still allows genuine flash sales —
   ai-trading, for example, runs at ₹499 on its offer page and ₹2,999 normally. */
const COURSE_MIN_PRICE = {
  'ai-basics': 49900,
  'ai-trading': 49900,
  'prompt-eng': 69900,
  'ai-freelancing': 149900,
  'earn-ai': 299900,
};

function minPriceFor(courseId) {
  return Object.prototype.hasOwnProperty.call(COURSE_MIN_PRICE, courseId)
    ? COURSE_MIN_PRICE[courseId]
    : null;
}

/* The signing key is derived from the Razorpay secret rather than being a
   separate env var, so this works on the existing deployment with no new
   configuration. Set ACCESS_TOKEN_SECRET to rotate access tokens
   independently of the payment credentials. */
function signingKey() {
  const explicit = process.env.ACCESS_TOKEN_SECRET;
  if (explicit) return Buffer.from(explicit, 'utf8');

  const razorpaySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!razorpaySecret) return null;
  // Derive, so the payment secret is never used directly as the token key.
  return crypto.createHmac('sha256', razorpaySecret).update('af-access-token-v1').digest();
}

const b64url = (buf) =>
  Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

const fromB64url = (str) =>
  Buffer.from(String(str).replace(/-/g, '+').replace(/_/g, '/'), 'base64');

/* Token layout: v1.<payload>.<signature> */
function issueAccessToken({ courseId, email, paymentId }) {
  const key = signingKey();
  if (!key) return null;

  const payload = b64url(
    JSON.stringify({ c: courseId, e: email || '', p: paymentId, t: Date.now() })
  );
  const sig = b64url(crypto.createHmac('sha256', key).update(payload).digest());
  return `v1.${payload}.${sig}`;
}

/* Returns the decoded payload when the signature is authentic, else null.
   Access is lifetime, so there is no expiry check — but the issue time is
   carried in the payload for auditing. */
function verifyAccessToken(token, expectedCourseId) {
  const key = signingKey();
  if (!key || typeof token !== 'string') return null;

  const parts = token.split('.');
  if (parts.length !== 3 || parts[0] !== 'v1') return null;

  const [, payload, sig] = parts;
  const expected = crypto.createHmac('sha256', key).update(payload).digest();
  const given = fromB64url(sig);

  if (given.length !== expected.length) return null;
  if (!crypto.timingSafeEqual(given, expected)) return null;

  let data;
  try {
    data = JSON.parse(fromB64url(payload).toString('utf8'));
  } catch (e) {
    return null;
  }

  // A token for course A must never unlock course B.
  if (expectedCourseId && data.c !== expectedCourseId) return null;
  return data;
}

function applyCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

module.exports = {
  COURSE_MIN_PRICE,
  minPriceFor,
  issueAccessToken,
  verifyAccessToken,
  applyCors,
};
