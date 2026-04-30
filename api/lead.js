/* ===================================================================
   Vercel Serverless Function: POST /api/lead
   Captures an email + lead-magnet identifier and forwards it to the
   Google Apps Script endpoint (same one already used by the contact
   form). Returns the lead-magnet URL on success.

   Env vars (set in Vercel dashboard):
     LEAD_FORWARDING_URL   — your Google Apps Script /exec URL
                             (optional — if unset, leads are logged
                             to Vercel logs only)
   =================================================================== */

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')   return res.status(405).json({ error: 'Method not allowed' });

  const { email, name, magnet } = req.body || {};

  // Basic validation
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  if (!magnet || typeof magnet !== 'string') {
    return res.status(400).json({ error: 'Lead magnet identifier missing.' });
  }

  const MAGNETS = {
    '50-chatgpt-prompts': {
      title: '50 ChatGPT Prompts for Indian Professionals',
      url:   '/lead-magnets/50-chatgpt-prompts',
    },
  };

  const m = MAGNETS[magnet];
  if (!m) return res.status(400).json({ error: 'Unknown lead magnet.' });

  // Forward to Google Apps Script (if configured)
  const forwardingUrl = process.env.LEAD_FORWARDING_URL;
  if (forwardingUrl) {
    try {
      await fetch(forwardingUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:   name || '',
          email:  email,
          school: '',
          role:   'Lead Magnet: ' + m.title,
          message: 'Downloaded: ' + m.title,
          phone: '',
        }),
      });
    } catch (err) {
      // Log but don't fail the user-facing request — they should still get the download
      console.error('Forwarding to Google Apps Script failed:', err);
    }
  }

  // Always log so leads aren't lost even if forwarding fails
  console.log('[lead]', JSON.stringify({ email, name: name || '', magnet, ts: Date.now() }));

  return res.status(200).json({
    success: true,
    downloadUrl: m.url,
    title: m.title,
  });
};
