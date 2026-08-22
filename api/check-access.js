/* ===================================================================
   Vercel Serverless Function: POST /api/check-access

   The course player calls this to decide whether to unlock paid lessons.
   The browser holds a signed token but cannot validate it — only the server
   knows the signing key — so a forged or edited token fails here.

   Body:  { token, courseId }
   200 →  { valid: true,  email }
   200 →  { valid: false } for anything unverifiable (never 4xx, so the
          player can treat "not entitled" as a normal state rather than an
          error to retry)
   =================================================================== */

const { verifyAccessToken, applyCors } = require('./_access');

module.exports = async function handler(req, res) {
  applyCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { token, courseId } = req.body || {};
  if (!token || !courseId) return res.status(200).json({ valid: false });

  const data = verifyAccessToken(token, courseId);
  if (!data) return res.status(200).json({ valid: false });

  return res.status(200).json({
    valid: true,
    courseId: data.c,
    email: data.e || null,
    purchasedAt: data.t || null,
  });
};
