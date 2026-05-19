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

  const { email, name, phone, magnet, businessName } = req.body || {};

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
    'ai-growth-consultant': {
      title: 'AI Growth Consultant Report',
      url:   null,
    },
    'social-media-posts': {
      title: 'Social Media Post Generator',
      url:   null,
    },
    'cold-email-writer': {
      title: 'Cold Email Writer',
      url:   null,
    },
    'competitor-swot': {
      title: 'Competitor SWOT Analyzer',
      url:   null,
    },
    'mastery-program-demo': {
      title: 'AI Mastery Program — Demo Booking',
      url:   null,   // No download — pure lead capture for the offline program
    },
    '2-day-workshop-signup': {
      title: '2-Day Live AI Workshop — Seat Reservation',
      url:   null,   // No download — lead capture for the ₹3,999 live workshop
    },
    'trainer-onboarding': {
      title: 'Trainer / Creator Application',
      url:   null,   // No download — application form on /teach
    },
  };

  const m = MAGNETS[magnet];
  if (!m) return res.status(400).json({ error: 'Unknown lead magnet.' });

  // Forward to Google Apps Script (if configured)
  const forwardingUrl = process.env.LEAD_FORWARDING_URL;
  const sourceUrl = (req.headers && (req.headers.referer || req.headers.referrer)) || '';
  if (forwardingUrl) {
    try {
      await fetch(forwardingUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // Modern, clearly-named fields used by the new Apps Script schema:
          tool:     m.title,
          magnet:   magnet,
          name:     name || '',
          email:    email,
          phone:    phone || '',
          business: businessName || '',
          source:   sourceUrl,
          // Legacy fields kept for backward compatibility with the older Apps Script:
          school:   '',
          role:     'Lead Magnet: ' + m.title,
          message:  businessName ? ('Used: ' + m.title + ' — Business: ' + businessName) : ('Used: ' + m.title),
        }),
      });
    } catch (err) {
      // Log but don't fail the user-facing request — they should still get the download
      console.error('Forwarding to Google Apps Script failed:', err);
    }
  }

  // Always log so leads aren't lost even if forwarding fails
  console.log('[lead]', JSON.stringify({ email, name: name || '', phone: phone || '', magnet, businessName: businessName || '', tool: m.title, source: sourceUrl, ts: Date.now() }));

  return res.status(200).json({
    success: true,
    downloadUrl: m.url,
    title: m.title,
  });
};
