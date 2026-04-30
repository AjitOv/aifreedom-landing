/* ===================================================================
   AI Freedom Institute — Cookie consent + conditional AdSense loader

   Shows a DPDP-compliant cookie banner. Loads Google AdSense ONLY
   after the user clicks "Accept all". Stores the choice in
   localStorage for 12 months.

   Used on /blog/* pages and any page with .adsense-slot elements.

   To activate ads:
     1. Replace AF_ADSENSE_PUBLISHER below with your real Publisher ID
        (format: ca-pub-XXXXXXXXXXXXXXXX), or set
        window.AF_ADSENSE_PUBLISHER on the page before this script loads.
     2. Replace each .adsense-slot's data-ad-slot attribute with a real
        slot ID generated in your AdSense dashboard.

   Until both of those are done, the banner still shows and the ad
   slots stay invisible (no broken layouts, no empty <ins>).
   =================================================================== */

(function () {
  'use strict';

  var STORAGE_KEY = 'af_consent_v1';
  var CONSENT_TTL_DAYS = 365;

  // Resolve publisher ID — page may set window.AF_ADSENSE_PUBLISHER
  var PUBLISHER_ID = (typeof window !== 'undefined' && window.AF_ADSENSE_PUBLISHER) || 'ca-pub-9730255492246554';
  var PUBLISHER_READY = /^ca-pub-\d{10,20}$/.test(PUBLISHER_ID);

  // ── Consent state helpers ─────────────────────────────────────
  function readConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      var ageMs = Date.now() - (data.ts || 0);
      var maxMs = CONSENT_TTL_DAYS * 24 * 60 * 60 * 1000;
      if (ageMs > maxMs) { localStorage.removeItem(STORAGE_KEY); return null; }
      return data.choice; // 'accept' | 'decline'
    } catch (e) { return null; }
  }
  function writeConsent(choice) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice: choice, ts: Date.now() })); } catch (e) {}
  }

  // ── AdSense loader (only runs if consent === 'accept' and PUBLISHER_READY) ──
  var adsLoaded = false;
  function loadAdSense() {
    if (adsLoaded || !PUBLISHER_READY) return;
    adsLoaded = true;

    var s = document.createElement('script');
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + encodeURIComponent(PUBLISHER_ID);
    document.head.appendChild(s);

    // Convert .adsense-slot placeholders into real <ins class="adsbygoogle">
    var slots = document.querySelectorAll('.adsense-slot');
    Array.prototype.forEach.call(slots, function (slot) {
      if (slot.dataset.activated === '1') return;
      var slotId = slot.getAttribute('data-ad-slot');
      if (!slotId || slotId === 'PASTE_AD_SLOT_ID') return; // not configured yet
      var ins = document.createElement('ins');
      ins.className = 'adsbygoogle';
      ins.style.display = 'block';
      ins.setAttribute('data-ad-client', PUBLISHER_ID);
      ins.setAttribute('data-ad-slot', slotId);
      ins.setAttribute('data-ad-format', slot.getAttribute('data-ad-format') || 'auto');
      ins.setAttribute('data-full-width-responsive', slot.getAttribute('data-full-width-responsive') || 'true');
      slot.appendChild(ins);
      slot.dataset.activated = '1';
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
    });
  }

  // ── Banner UI ────────────────────────────────────────────────
  function buildBanner() {
    if (document.getElementById('af-consent-banner')) return;
    var bar = document.createElement('div');
    bar.id = 'af-consent-banner';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Cookie consent');
    bar.style.cssText = [
      'position:fixed','left:16px','right:16px','bottom:16px','z-index:99998',
      'max-width:780px','margin:0 auto',
      'background:#16161f','color:#e5e7eb',
      'border:1px solid rgba(255,255,255,0.1)','border-radius:14px',
      'padding:18px 20px','box-shadow:0 16px 48px rgba(0,0,0,0.45)',
      'font-family:Inter,system-ui,sans-serif','font-size:0.9rem','line-height:1.55',
      'display:flex','flex-wrap:wrap','gap:14px','align-items:center','justify-content:space-between'
    ].join(';');
    bar.innerHTML =
      '<div style="flex:1 1 320px;min-width:240px;">' +
        '<strong style="color:#fff;display:block;margin-bottom:4px;">Cookies on this site</strong>' +
        '<span style="color:rgba(255,255,255,0.72);">We use essential cookies to run the Site and Google Analytics for traffic measurement. With your permission, we also show ads on blog pages via Google AdSense. ' +
        '<a href="/privacy" style="color:#4ade80;text-decoration:underline;">Learn more</a>.' +
        '</span>' +
      '</div>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
        '<button id="af-consent-decline" type="button" style="background:rgba(255,255,255,0.08);color:#fff;border:1px solid rgba(255,255,255,0.15);border-radius:8px;padding:9px 16px;font:inherit;font-weight:600;cursor:pointer;">Decline ads</button>' +
        '<button id="af-consent-accept" type="button" style="background:linear-gradient(135deg,#6A11CB,#2575fc);color:#fff;border:none;border-radius:8px;padding:9px 16px;font:inherit;font-weight:700;cursor:pointer;">Accept all</button>' +
      '</div>';
    document.body.appendChild(bar);

    document.getElementById('af-consent-accept').addEventListener('click', function () {
      writeConsent('accept');
      hideBanner();
      loadAdSense();
    });
    document.getElementById('af-consent-decline').addEventListener('click', function () {
      writeConsent('decline');
      hideBanner();
    });
  }
  function hideBanner() {
    var bar = document.getElementById('af-consent-banner');
    if (!bar) return;
    bar.style.opacity = '0';
    bar.style.transition = 'opacity .25s';
    setTimeout(function () { if (bar.parentNode) bar.parentNode.removeChild(bar); }, 280);
  }

  // ── Public: re-open consent UI from a footer link ────────────
  window.afConsentReset = function () {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    buildBanner();
  };

  // ── Page-load decision ───────────────────────────────────────
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  ready(function () {
    var choice = readConsent();
    if (choice === 'accept') {
      loadAdSense();
    } else if (choice === 'decline') {
      // Already declined — nothing to do
    } else {
      buildBanner();
    }
  });
})();
