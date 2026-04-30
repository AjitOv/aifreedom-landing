/* ===================================================================
   AI Freedom Institute — Lead-Magnet Capture Widget

   Drop this on any page where you want a lead-magnet download form.
   Place a <div class="lead-magnet" data-magnet="50-chatgpt-prompts"></div>
   anywhere in the body — this script renders the card into it.

   On submit:
     1. POST {email, name, magnet} to /api/lead
     2. On success: open the download URL in a new tab + show success state
     3. Mark this magnet as "claimed" in localStorage so we don't nag
   =================================================================== */

(function () {
  'use strict';

  var MAGNET_DATA = {
    '50-chatgpt-prompts': {
      title: '50 ChatGPT Prompts for Indian Professionals',
      sub:   'Copy-paste templates for emails, work, study, content, and earning. Free PDF.',
      cta:   'Send Me The Prompts',
      icon:  '📝',
      color: '#4ade80',
      bonusLine: 'Used by 1000+ Indian students and professionals.',
    },
  };

  function claimedKey(m) { return 'af_magnet_' + m; }
  function isClaimed(m)  { try { return !!localStorage.getItem(claimedKey(m)); } catch (e) { return false; } }
  function setClaimed(m, payload) { try { localStorage.setItem(claimedKey(m), JSON.stringify(payload)); } catch (e) {} }

  function escapeHtml(s) { return String(s || '').replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[c]; }); }

  function render(slot) {
    var magnet = slot.getAttribute('data-magnet');
    var d = MAGNET_DATA[magnet];
    if (!d) return;

    var claimed = isClaimed(magnet);
    var claimedData = null;
    if (claimed) { try { claimedData = JSON.parse(localStorage.getItem(claimedKey(magnet))); } catch (e) {} }

    slot.innerHTML =
      '<div class="lm-card">' +
        '<div class="lm-icon" style="background:' + d.color + '20;color:' + d.color + ';">' + d.icon + '</div>' +
        '<div class="lm-text">' +
          '<div class="lm-tag">FREE LEAD MAGNET</div>' +
          '<h3 class="lm-title">' + escapeHtml(d.title) + '</h3>' +
          '<p class="lm-sub">' + escapeHtml(d.sub) + '</p>' +
          (claimed && claimedData ?
            '<div class="lm-claimed"><strong>✓ You have access.</strong> <a href="' + escapeHtml(claimedData.downloadUrl) + '" target="_blank" rel="noopener">Open the PDF →</a></div>' :
            '<form class="lm-form" novalidate>' +
              '<input type="text"  class="lm-input" name="name"  placeholder="Your name (optional)" autocomplete="name">' +
              '<input type="email" class="lm-input" name="email" placeholder="Your email" autocomplete="email" required>' +
              '<button type="submit" class="lm-btn">' + escapeHtml(d.cta) + ' →</button>' +
              '<div class="lm-error" style="display:none;"></div>' +
              '<div class="lm-bonus">🎁 ' + escapeHtml(d.bonusLine) + ' · No spam · One-click unsubscribe.</div>' +
            '</form>'
          ) +
        '</div>' +
      '</div>';

    var form = slot.querySelector('.lm-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('.lm-btn');
      var err = form.querySelector('.lm-error');
      err.style.display = 'none';
      btn.disabled = true;
      var orig = btn.textContent;
      btn.textContent = 'Sending…';

      var email = form.email.value.trim();
      var name  = form.name.value.trim();

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        err.textContent = 'Please enter a valid email.';
        err.style.display = 'block';
        btn.disabled = false; btn.textContent = orig;
        return;
      }

      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, name: name, magnet: magnet }),
      })
        .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, body: j }; }); })
        .then(function (res) {
          if (!res.ok || !res.body.success) throw new Error(res.body.error || 'Something went wrong. Please try again.');
          setClaimed(magnet, { email: email, downloadUrl: res.body.downloadUrl, ts: Date.now() });
          // Open in new tab so they keep their place on the article
          window.open(res.body.downloadUrl, '_blank', 'noopener');
          // Re-render with claimed state
          slot.removeAttribute('data-rendered');
          render(slot);
        })
        .catch(function (e) {
          err.textContent = e.message || 'Something went wrong. Please try again.';
          err.style.display = 'block';
          btn.disabled = false; btn.textContent = orig;
        });
    });
  }

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  ready(function () {
    var slots = document.querySelectorAll('.lead-magnet[data-magnet]');
    Array.prototype.forEach.call(slots, function (s) { if (!s.getAttribute('data-rendered')) { render(s); s.setAttribute('data-rendered', '1'); } });
  });
})();
