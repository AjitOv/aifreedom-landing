/* ===================================================================
   Shared course entitlement + access recovery.

   Used by the course player and the student dashboard so both agree on
   what "owns this course" means. Entitlement is a token signed by the
   server; the browser only stores it and asks /api/check-access whether
   it is genuine. Nothing here can grant access on its own.
   =================================================================== */
(function (global) {
  'use strict';

  var STORE_PREFIX = 'af_access_';
  var LEGACY_PREFIX = 'af_paid_';

  /* ---------- storage ---------- */

  function readAccess(courseId) {
    try {
      var raw = localStorage.getItem(STORE_PREFIX + courseId);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      return parsed && parsed.token ? parsed : null;
    } catch (e) { return null; }
  }

  function storeAccess(courseId, token, extra) {
    try {
      var record = { token: token, paidAt: Date.now() };
      for (var k in (extra || {})) if (extra[k] != null) record[k] = extra[k];
      localStorage.setItem(STORE_PREFIX + courseId, JSON.stringify(record));
      return true;
    } catch (e) { return false; }
  }

  /* ---------- verification ---------- */

  function verifyToken(token, courseId) {
    return fetch('/api/check-access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: token, courseId: courseId }),
    })
      .then(function (r) { return r.json(); })
      .then(function (d) { return d && d.valid ? d : null; })
      .catch(function () { return null; });
  }

  /* Customers who bought before entitlement was signed have the older record,
     which stored the Razorpay payment id. Trade it for a real token so nobody
     loses access to a course they paid for. */
  function migrateLegacy(courseId) {
    var legacy;
    try {
      legacy = JSON.parse(localStorage.getItem(LEGACY_PREFIX + courseId) || 'null');
    } catch (e) { return Promise.resolve(false); }
    if (!legacy || !legacy.paymentId) return Promise.resolve(false);

    return restoreByPaymentId(courseId, legacy.paymentId)
      .then(function (result) {
        if (result.ok) {
          try { localStorage.removeItem(LEGACY_PREFIX + courseId); } catch (e) {}
          return true;
        }
        return false;
      })
      .catch(function () { return false; });
  }

  /* Resolves to the verified payload, or null. Never throws — a network
     failure must not unlock anything, but must not spam errors either. */
  function checkAccess(courseId) {
    var stored = readAccess(courseId);
    if (stored) return verifyToken(stored.token, courseId);

    return migrateLegacy(courseId).then(function (migrated) {
      if (!migrated) return null;
      var fresh = readAccess(courseId);
      return fresh ? verifyToken(fresh.token, courseId) : null;
    });
  }

  /* Check several courses at once, for the dashboard. */
  function checkMany(courseIds) {
    return Promise.all(
      courseIds.map(function (id) {
        return checkAccess(id).then(function (r) { return { courseId: id, access: r }; });
      })
    );
  }

  /* ---------- recovery ---------- */

  function restoreByPaymentId(courseId, paymentId) {
    return fetch('/api/restore-access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentId: String(paymentId).trim(), courseId: courseId }),
    })
      .then(function (res) {
        return res.json().then(function (data) {
          if (!res.ok || !data.success || !data.token) {
            return { ok: false, error: data.error || 'Could not verify that payment.' };
          }
          storeAccess(courseId, data.token, { email: data.email, paymentId: String(paymentId).trim() });
          return { ok: true, email: data.email || null };
        });
      })
      .catch(function () {
        return { ok: false, error: 'Could not reach the server. Check your connection and try again.' };
      });
  }

  /* ---------- progress (shared with the player's localStorage) ---------- */

  function progressFor(lessonIds) {
    var completed = {};
    try { completed = JSON.parse(localStorage.getItem('af_completed') || '{}'); } catch (e) {}
    var done = lessonIds.filter(function (id) { return !!completed[id]; }).length;
    return { done: done, total: lessonIds.length, pct: lessonIds.length ? Math.round((done / lessonIds.length) * 100) : 0 };
  }

  /* ---------- restore modal ---------- */
  /* Replaces a window.prompt(), which gave no explanation of where to find a
     Payment ID and no way to show a useful error. */

  function injectStyles() {
    if (document.getElementById('afAccessStyles')) return;
    var css = document.createElement('style');
    css.id = 'afAccessStyles';
    css.textContent = [
      '.af-rst-overlay{position:fixed;inset:0;background:rgba(4,4,10,0.82);backdrop-filter:blur(6px);',
      'display:flex;align-items:center;justify-content:center;padding:20px;z-index:100000;}',
      '.af-rst-card{background:#14141d;border:1px solid rgba(255,255,255,0.1);border-radius:20px;',
      'padding:28px;max-width:440px;width:100%;position:relative;color:#f0f0f5;',
      "font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;box-shadow:0 24px 70px rgba(0,0,0,0.6);}",
      '.af-rst-card h3{margin:0 0 8px;font-size:1.25rem;font-weight:800;}',
      '.af-rst-card p{margin:0 0 18px;font-size:0.92rem;line-height:1.6;color:#a0a0b8;}',
      '.af-rst-card label{display:block;font-size:0.8rem;font-weight:700;color:#a0a0b8;margin-bottom:6px;}',
      '.af-rst-card input{width:100%;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14);',
      'border-radius:10px;color:#fff;font-size:0.95rem;padding:12px 14px;box-sizing:border-box;outline:none;',
      "font-family:ui-monospace,'SF Mono',Menlo,monospace;}",
      '.af-rst-card input:focus{border-color:#00d4ff;}',
      '.af-rst-hint{font-size:0.78rem;color:#6b6b82;margin-top:8px;line-height:1.5;}',
      '.af-rst-msg{display:none;margin-top:12px;padding:10px 13px;border-radius:9px;font-size:0.85rem;line-height:1.5;}',
      '.af-rst-msg.err{display:block;background:rgba(255,71,87,0.12);border:1px solid rgba(255,71,87,0.3);color:#ffb3ba;}',
      '.af-rst-msg.ok{display:block;background:rgba(0,255,136,0.1);border:1px solid rgba(0,255,136,0.3);color:#8ff0c0;}',
      '.af-rst-actions{display:flex;gap:10px;margin-top:20px;}',
      '.af-rst-actions button{flex:1;padding:13px;border-radius:11px;font-size:0.95rem;font-weight:700;',
      'cursor:pointer;border:none;font-family:inherit;transition:opacity .2s;}',
      '.af-rst-actions button:disabled{opacity:.6;cursor:default;}',
      '.af-rst-go{background:linear-gradient(135deg,#00ff88,#00d4ff);color:#0a0a0f;}',
      '.af-rst-cancel{background:rgba(255,255,255,0.07);color:#a0a0b8;border:1px solid rgba(255,255,255,0.12)!important;}',
      '.af-rst-close{position:absolute;top:14px;right:16px;background:none;border:none;color:#6b6b82;',
      'font-size:1.3rem;cursor:pointer;line-height:1;}',
    ].join('');
    document.head.appendChild(css);
  }

  function openRestoreModal(courseId, onSuccess) {
    injectStyles();

    var overlay = document.createElement('div');
    overlay.className = 'af-rst-overlay';
    overlay.innerHTML =
      '<div class="af-rst-card" role="dialog" aria-modal="true" aria-labelledby="afRstTitle">' +
        '<button class="af-rst-close" aria-label="Close">&times;</button>' +
        '<h3 id="afRstTitle">🔑 Restore your access</h3>' +
        '<p>Already bought this course? Enter your Razorpay Payment ID and we will unlock it on this device.</p>' +
        '<label for="afRstInput">Payment ID</label>' +
        '<input id="afRstInput" placeholder="pay_XXXXXXXXXXXX" autocomplete="off" spellcheck="false">' +
        '<div class="af-rst-hint">Find it in your Razorpay payment receipt email, or on the success screen shown right after you paid.</div>' +
        '<div class="af-rst-msg" id="afRstMsg"></div>' +
        '<div class="af-rst-actions">' +
          '<button class="af-rst-cancel" type="button">Cancel</button>' +
          '<button class="af-rst-go" type="button">Unlock course</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    var input = overlay.querySelector('#afRstInput');
    var msg = overlay.querySelector('#afRstMsg');
    var go = overlay.querySelector('.af-rst-go');
    var close = function () { overlay.remove(); };

    overlay.querySelector('.af-rst-close').onclick = close;
    overlay.querySelector('.af-rst-cancel').onclick = close;
    overlay.onclick = function (e) { if (e.target === overlay) close(); };
    input.focus();

    function show(text, kind) { msg.textContent = text; msg.className = 'af-rst-msg ' + kind; }

    function submit() {
      var value = input.value.trim();
      if (!value) return show('Please enter your Payment ID.', 'err');
      if (!/^pay_[A-Za-z0-9]+$/.test(value)) {
        return show('That does not look like a Payment ID. It starts with "pay_".', 'err');
      }
      go.disabled = true;
      go.textContent = 'Checking…';
      msg.className = 'af-rst-msg';

      restoreByPaymentId(courseId, value).then(function (result) {
        go.disabled = false;
        go.textContent = 'Unlock course';
        if (!result.ok) return show(result.error, 'err');
        show('Verified. Unlocking your course…', 'ok');
        setTimeout(function () {
          close();
          if (typeof onSuccess === 'function') onSuccess(result);
        }, 700);
      });
    }

    go.onclick = submit;
    input.onkeydown = function (e) { if (e.key === 'Enter') submit(); };
  }

  global.AFAccess = {
    read: readAccess,
    store: storeAccess,
    check: checkAccess,
    checkMany: checkMany,
    restore: restoreByPaymentId,
    openRestoreModal: openRestoreModal,
    progressFor: progressFor,
  };
})(window);
