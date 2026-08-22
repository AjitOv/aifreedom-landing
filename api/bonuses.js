/* ===================================================================
   Vercel Serverless Function: POST /api/bonuses

   Delivers the course bonuses to a paying student. Until this existed a
   buyer paid ₹499, landed in the player, and received none of the four
   bonuses the sales page promises — they were listed but never handed over.

   Everything is gated on the same signed access token as the videos, so
   the prompt pack does not become another free download.

   Body:  { courseId, token }
   200 →  { bonuses: [...] }
   403 →  { error }  without a valid token
   =================================================================== */

const { verifyAccessToken, applyCors } = require('./_access');
const { PROMPT_PACK, TOTAL } = require('./_bonus-prompts');

/* Set these in Vercel → Project → Settings → Environment Variables.
   Left empty, the bonus is simply not shown rather than advertised with a
   dead link. */
const COMMUNITY_URL = process.env.BONUS_COMMUNITY_URL || '';
const SUPPORT_EMAIL = process.env.BONUS_SUPPORT_EMAIL || '';

module.exports = async function handler(req, res) {
  applyCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { courseId, token } = req.body || {};
  if (!courseId) return res.status(400).json({ error: 'Missing courseId.' });

  const access = verifyAccessToken(token, courseId);
  if (!access) return res.status(403).json({ error: 'Bonuses are for enrolled students.' });

  const bonuses = [
    {
      id: 'prompts',
      icon: '📝',
      title: `${TOTAL} ChatGPT Prompt Templates`,
      blurb: 'Ready-to-copy prompts across 10 areas of work, study and business.',
      type: 'prompts',
      count: TOTAL,
      categories: PROMPT_PACK,
    },
    {
      id: 'tools',
      icon: '🛠',
      title: 'AI Tools Guide (30 tools)',
      blurb: 'The 30 tools worth knowing, what each is for, and which are free.',
      type: 'download',
      // Downloaded through /api/bonus-file, which re-checks the token.
      endpoint: '/api/bonus-file',
      filename: 'AI-Freedom-30-AI-Tools-Guide.pdf',
    },
  ];

  if (COMMUNITY_URL) {
    bonuses.push({
      id: 'community',
      icon: '💬',
      title: 'Private WhatsApp Community',
      blurb: 'Other learners, weekly AI updates and Q&A.',
      type: 'link',
      url: COMMUNITY_URL,
    });
  }

  if (SUPPORT_EMAIL) {
    bonuses.push({
      id: 'support',
      icon: '✉️',
      title: 'Email Support',
      blurb: 'Stuck on a lesson? Write in and get a reply within 24 hours.',
      type: 'link',
      url: `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('AI Basics — question')}`,
    });
  }

  return res.status(200).json({ bonuses });
};
