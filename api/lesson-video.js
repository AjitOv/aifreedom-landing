/* ===================================================================
   Vercel Serverless Function: POST /api/lesson-video

   Returns the embed URL for one lesson, and only to someone entitled to
   it. Video ids are never shipped in the page source — otherwise the
   paywall would be trivially bypassed by reading devtools.

   Body:  { courseId, lessonId, token?, free? }
   200 →  { url }            entitled, or a free preview lesson
   200 →  { url: null }      no video uploaded for that lesson yet
   403 →  { error }          paid lesson without a valid token
   =================================================================== */

const { verifyAccessToken, applyCors } = require('./_access');
const { embedUrlFor } = require('./_videos');

/* Which lessons are watchable without paying. Kept here rather than taken
   from the request, since the client could otherwise just claim any lesson
   is free. */
const FREE_LESSONS = {
  'ai-basics': ['ab-01', 'ab-02'],
  'earn-ai': ['ea-01', 'ea-02'],
  'ai-trading': ['at-01', 'at-02'],
  'prompt-eng': ['pe-01', 'pe-02'],
  'ai-freelancing': ['af-01', 'af-02'],
};

module.exports = async function handler(req, res) {
  applyCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { courseId, lessonId, token } = req.body || {};
  if (!courseId || !lessonId) {
    return res.status(400).json({ error: 'Missing courseId or lessonId.' });
  }

  const isFree = (FREE_LESSONS[courseId] || []).indexOf(lessonId) !== -1;

  if (!isFree) {
    const access = verifyAccessToken(token, courseId);
    if (!access) {
      return res.status(403).json({ error: 'This lesson requires purchase.' });
    }
  }

  // Entitled — but the video may simply not be uploaded yet.
  return res.status(200).json({ url: embedUrlFor(courseId, lessonId) });
};
