/* ===================================================================
   Vercel Serverless Function: POST /api/bonus-file

   Streams a bonus file to an enrolled student. The file lives base64 in a
   server-only module rather than in the public web root, so it cannot be
   downloaded by guessing a URL — the access token is re-checked here on
   every request.

   Body:  { courseId, token, file? }
   200 →  application/pdf
   403 →  { error }
   =================================================================== */

const { verifyAccessToken, applyCors } = require('./_access');
const { TOOLS_GUIDE_PDF_BASE64 } = require('./_bonus-files');

const FILES = {
  tools: {
    base64: TOOLS_GUIDE_PDF_BASE64,
    filename: 'AI-Freedom-30-AI-Tools-Guide.pdf',
    contentType: 'application/pdf',
  },
};

module.exports = async function handler(req, res) {
  applyCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { courseId, token, file } = req.body || {};
  if (!courseId) return res.status(400).json({ error: 'Missing courseId.' });

  const access = verifyAccessToken(token, courseId);
  if (!access) return res.status(403).json({ error: 'Bonuses are for enrolled students.' });

  const entry = FILES[file || 'tools'];
  if (!entry) return res.status(404).json({ error: 'Unknown file.' });

  const buf = Buffer.from(entry.base64, 'base64');
  res.setHeader('Content-Type', entry.contentType);
  res.setHeader('Content-Disposition', `attachment; filename="${entry.filename}"`);
  res.setHeader('Content-Length', buf.length);
  // Personal to the buyer — never let a CDN or proxy hold on to it.
  res.setHeader('Cache-Control', 'private, no-store');
  return res.status(200).send(buf);
};
