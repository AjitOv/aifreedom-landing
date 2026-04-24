/* ===================================================================
   AI Freedom Institute — Razorpay Standard Checkout Handler
   File: razorpay-checkout.js
   
   Flow:
     1. User fills form and clicks "Proceed to Pay"
     2. POST /api/create-order → get order_id, amount, key_id
     3. Open Razorpay modal with that order_id
     4. On payment success → POST /api/verify-payment → show success
     5. On failure/dismiss → show error and allow retry
   
   KEY_SECRET is NEVER present in this file.
   =================================================================== */

/* ── Normalize phone to E.164 (+91XXXXXXXXXX for India) ─────────── */
function formatPhone(raw) {
  const digits = raw.replace(/[\s\-\+]/g, '');
  // Already has country code
  if (digits.length === 12 && digits.startsWith('91')) return '+' + digits;
  if (digits.length === 13 && digits.startsWith('091')) return '+91' + digits.slice(3);
  // 10-digit Indian number
  if (digits.length === 10) return '+91' + digits;
  return '+' + digits; // fallback
}

async function handleEnrollAndPay(event) {
  event.preventDefault();

  const form = document.getElementById('enrollForm');
  const enrollBtn = document.getElementById('enrollBtn');
  const enrollBtnText = document.getElementById('enrollBtnText');
  const enrollBtnSpinner = document.getElementById('enrollBtnSpinner');
  const enrollError = document.getElementById('enrollError');

  // Helper to show/hide error message
  function showError(msg) {
    enrollError.textContent = msg;
    enrollError.style.display = 'block';
    setLoading(false);
  }

  function clearError() {
    enrollError.textContent = '';
    enrollError.style.display = 'none';
  }

  function setLoading(loading) {
    enrollBtn.disabled = loading;
    enrollBtnText.style.display = loading ? 'none' : 'inline';
    enrollBtnSpinner.style.display = loading ? 'inline' : 'none';
  }

  // Gather form values
  const name    = document.getElementById('enroll-name').value.trim();
  const email   = document.getElementById('enroll-email').value.trim();
  const phone   = document.getElementById('enroll-phone').value.trim();
  const courseSelect = document.getElementById('enroll-course');
  const courseName   = courseSelect.value;
  const selectedOption = courseSelect.options[courseSelect.selectedIndex];
  const amount = parseInt(selectedOption.dataset.amount || '0', 10);

  clearError();

  // Client-side validation
  if (!name) return showError('Please enter your name.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showError('Please enter a valid email address.');
  if (!phone || !/^\d{10,13}$/.test(phone.replace(/[\s\-\+]/g, ''))) return showError('Please enter a valid phone number (10–13 digits).');
  if (!courseName) return showError('Please select a course to continue.');
  if (!amount || amount < 100) return showError('Selected course has an invalid price. Please contact us.');

  setLoading(true);

  // ── STEP 1: Create order on the server ──────────────────────────────
  let orderData;
  try {
    const res = await fetch('/api/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount,
        currency: 'INR',
        receipt: `rcpt_${Date.now()}`,
        courseName,
      }),
    });

    orderData = await res.json();

    if (!res.ok) {
      throw new Error(orderData.error || `Server error: ${res.status}`);
    }
  } catch (err) {
    console.error('create-order failed:', err);
    return showError(`Could not initiate payment: ${err.message}. Please try again or contact support.`);
  }

  setLoading(false);

  // ── STEP 2: Open Razorpay modal ──────────────────────────────────────
  const options = {
    key: orderData.key_id,
    amount: orderData.amount,       // paise, as returned by server
    currency: orderData.currency,
    name: 'AI Freedom Institute',
    description: courseName,
    order_id: orderData.order_id,
    prefill: {
      name,
      email,
      contact: formatPhone(phone),
    },
    config: {
      display: {
        hide: [{ method: 'paylater' }],
        preferences: { show_default_blocks: true },
      },
    },
    notes: {
      course: courseName,
    },
    theme: {
      color: '#6A11CB',
    },

    // ── Payment success callback ──────────────────────────────────────
    handler: async function (response) {
      setLoading(true);

      // ── STEP 3: Verify signature on the server ──────────────────────
      try {
        const verifyRes = await fetch('/api/verify-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id:   response.razorpay_order_id,
            razorpay_signature:  response.razorpay_signature,
          }),
        });

        const verifyData = await verifyRes.json();

        if (!verifyRes.ok || !verifyData.success) {
          throw new Error(verifyData.error || 'Signature verification failed.');
        }

        // ── Success: show confirmation ──────────────────────────────────
        setLoading(false);
        showPaymentSuccess({
          paymentId: response.razorpay_payment_id,
          orderId:   response.razorpay_order_id,
          name,
          email,
          courseName,
          amount,
        });

      } catch (err) {
        console.error('verify-payment failed:', err);
        setLoading(false);
        showError(
          `Payment was captured but verification failed: ${err.message}. ` +
          `Please contact info@aifreedom.in with your Payment ID: ${response.razorpay_payment_id}`
        );
      }
    },

    // ── Modal dismiss (user cancelled) ───────────────────────────────
    modal: {
      ondismiss: function () {
        showError('Payment was cancelled. Click "Proceed to Pay" to try again.');
        setLoading(false);
      },
    },
  };

  // ── Open modal (guard: check if Razorpay is loaded) ─────────────────
  if (typeof Razorpay === 'undefined') {
    return showError('Payment gateway failed to load. Please refresh the page and try again.');
  }

  const rzp = new Razorpay(options);

  rzp.on('payment.failed', function (response) {
    console.error('Payment failed:', response.error);
    showError(
      `Payment failed: ${response.error.description} (Code: ${response.error.code}). ` +
      `Please try again or use a different payment method.`
    );
    setLoading(false);
  });

  rzp.open();
}

/* ── Show payment success state ───────────────────────────────────── */
function showPaymentSuccess({ paymentId, orderId, name, email, courseName, amount }) {
  const enrollFormCard  = document.getElementById('enrollFormCard');
  const paymentSuccess  = document.getElementById('paymentSuccess');
  const successDetails  = document.getElementById('successDetails');

  if (enrollFormCard) enrollFormCard.style.display = 'none';
  if (paymentSuccess) paymentSuccess.style.display = 'block';

  if (successDetails) {
    const amountInRupees = (amount / 100).toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    });

    successDetails.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div>👤 <strong>Name:</strong> ${escapeHtml(name)}</div>
        <div>✉️ <strong>Email:</strong> ${escapeHtml(email)}</div>
        <div>📚 <strong>Course:</strong> ${escapeHtml(courseName)}</div>
        <div>💰 <strong>Amount Paid:</strong> ${amountInRupees}</div>
        <div style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,0.1);">
          <div style="font-size:0.75rem;opacity:0.6;">Payment ID: ${escapeHtml(paymentId)}</div>
          <div style="font-size:0.75rem;opacity:0.6;">Order ID: ${escapeHtml(orderId)}</div>
        </div>
      </div>
    `;
  }

  // Scroll to success card
  if (paymentSuccess) {
    paymentSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

/* ── XSS-safe string escape ──────────────────────────────────────── */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ═══════════════════════════════════════════════════════════════════
   QUICK COURSE CHECKOUT
   Used by Course.html and index.html "Enroll" buttons.
   Opens a lightweight modal → collects name/email/phone → pays.
   ═══════════════════════════════════════════════════════════════════ */

function openCourseCheckout(courseName, amount, options) {
  // Remove any existing modal
  const existing = document.getElementById('rzpQuickModal');
  if (existing) existing.remove();

  const opts = options || {};
  const courseId = opts.courseId || null;   // e.g. 'ai-basics' — enables entitlement + redirect
  const redirectTo = opts.redirectTo || null; // defaults to '/course-player?course=<courseId>&paid=1'
  const amountPaise = parseInt(amount, 10);
  const amountRupees = '₹' + (amountPaise / 100).toLocaleString('en-IN');

  // Build modal HTML
  const modal = document.createElement('div');
  modal.id = 'rzpQuickModal';
  modal.style.cssText = `
    position:fixed;inset:0;z-index:99999;
    display:flex;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.75);backdrop-filter:blur(6px);
    padding:16px;animation:rzpFadeIn 0.2s ease;
  `;
  modal.innerHTML = `
    <style>
      @keyframes rzpFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      #rzpQuickModal .rzp-box{background:#16161f;border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:32px;max-width:440px;width:100%;position:relative;}
      #rzpQuickModal .rzp-close{position:absolute;top:16px;right:16px;background:none;border:none;color:rgba(255,255,255,0.5);font-size:1.4rem;cursor:pointer;line-height:1;}
      #rzpQuickModal h3{margin:0 0 4px;font-size:1.25rem;color:#fff;}
      #rzpQuickModal .rzp-course-name{color:rgba(255,255,255,0.6);font-size:0.9rem;margin:0 0 6px;}
      #rzpQuickModal .rzp-price{font-size:1.5rem;font-weight:700;color:#00c896;margin:0 0 20px;}
      #rzpQuickModal label{display:block;font-size:0.8rem;color:rgba(255,255,255,0.6);margin-bottom:4px;}
      #rzpQuickModal input{width:100%;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:10px;color:#fff;font-size:0.95rem;padding:11px 14px;margin-bottom:14px;box-sizing:border-box;outline:none;transition:border-color 0.2s;}
      #rzpQuickModal input:focus{border-color:rgba(106,17,203,0.6);}
      #rzpQuickModal .rzp-error{color:#ff6b6b;font-size:0.82rem;margin-bottom:10px;padding:8px 12px;background:rgba(255,107,107,0.1);border-radius:8px;border:1px solid rgba(255,107,107,0.25);display:none;}
      #rzpQuickModal .rzp-pay-btn{width:100%;padding:14px;background:linear-gradient(135deg,#6A11CB,#2575fc);border:none;border-radius:12px;color:#fff;font-size:1rem;font-weight:600;cursor:pointer;transition:opacity 0.2s;}
      #rzpQuickModal .rzp-pay-btn:disabled{opacity:0.6;cursor:not-allowed;}
      #rzpQuickModal .rzp-secure{text-align:center;font-size:0.75rem;color:rgba(255,255,255,0.4);margin-top:10px;}
    </style>
    <div class="rzp-box">
      <button class="rzp-close" id="rzpCloseBtn" aria-label="Close">×</button>
      <h3>Enroll Now</h3>
      <p class="rzp-course-name">${escapeHtml(courseName)}</p>
      <p class="rzp-price">${amountRupees}</p>
      <div class="rzp-error" id="rzpQuickError"></div>
      <label for="rzpName">Your Name</label>
      <input type="text" id="rzpName" placeholder="Enter your name" autocomplete="name">
      <label for="rzpEmail">Email Address</label>
      <input type="email" id="rzpEmail" placeholder="Enter your email" autocomplete="email">
      <label for="rzpPhone">Phone Number</label>
      <input type="tel" id="rzpPhone" placeholder="Enter phone number" autocomplete="tel">
      <button class="rzp-pay-btn" id="rzpPayNowBtn">
        <span id="rzpPayText">🔒 Pay ${amountRupees} Securely</span>
        <span id="rzpPaySpinner" style="display:none">⏳ Processing...</span>
      </button>
      <p class="rzp-secure">Secured by Razorpay • 256-bit SSL</p>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Focus first field
  setTimeout(() => document.getElementById('rzpName')?.focus(), 100);

  function closeModal() {
    modal.remove();
    document.body.style.overflow = '';
  }

  document.getElementById('rzpCloseBtn').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  const payBtn = document.getElementById('rzpPayNowBtn');
  const errBox = document.getElementById('rzpQuickError');

  function showErr(msg) {
    errBox.textContent = msg;
    errBox.style.display = 'block';
    payBtn.disabled = false;
    document.getElementById('rzpPayText').style.display = '';
    document.getElementById('rzpPaySpinner').style.display = 'none';
  }

  function setLoading(on) {
    payBtn.disabled = on;
    document.getElementById('rzpPayText').style.display = on ? 'none' : '';
    document.getElementById('rzpPaySpinner').style.display = on ? '' : 'none';
  }

  payBtn.addEventListener('click', async () => {
    errBox.style.display = 'none';
    const name  = document.getElementById('rzpName').value.trim();
    const email = document.getElementById('rzpEmail').value.trim();
    const phone = document.getElementById('rzpPhone').value.trim();

    if (!name)  return showErr('Please enter your name.');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showErr('Please enter a valid email address.');
    if (!phone || !/^\d{10,13}$/.test(phone.replace(/[\s\-\+]/g, ''))) return showErr('Please enter a valid phone number.');

    setLoading(true);

    // Create order
    let orderData;
    try {
      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amountPaise, currency: 'INR', receipt: `rcpt_${Date.now()}`, courseName }),
      });
      orderData = await res.json();
      if (!res.ok) throw new Error(orderData.error || `Server error ${res.status}`);
    } catch (err) {
      return showErr(`Could not initiate payment: ${err.message}`);
    }

    setLoading(false);
    closeModal(); // Close our modal before Razorpay opens

    if (typeof Razorpay === 'undefined') {
      alert('Payment gateway failed to load. Please refresh the page and try again.');
      return;
    }

    const options = {
      key: orderData.key_id,
      amount: orderData.amount,
      currency: orderData.currency,
      name: 'AI Freedom Institute',
      description: courseName,
      order_id: orderData.order_id,
      prefill: { name, email, contact: formatPhone(phone) },
      config: {
        display: {
          hide: [{ method: 'paylater' }],
          preferences: { show_default_blocks: true },
        },
      },
      notes: { course: courseName },
      theme: { color: '#6A11CB' },

      handler: async function (response) {
        // Verify payment
        try {
          const verifyRes = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id:   response.razorpay_order_id,
              razorpay_signature:  response.razorpay_signature,
            }),
          });
          const verifyData = await verifyRes.json();
          if (!verifyRes.ok || !verifyData.success) throw new Error(verifyData.error || 'Verification failed.');

          // Grant entitlement for the course (localStorage-based, device-bound)
          if (courseId) {
            try {
              localStorage.setItem('af_paid_' + courseId, JSON.stringify({
                paymentId: response.razorpay_payment_id,
                orderId:   response.razorpay_order_id,
                courseName,
                name,
                email,
                paidAt: Date.now(),
              }));
            } catch (e) { /* storage full / blocked — redirect will still mark as paid via ?paid=1 */ }

            // Show success state, then redirect to the course player
            const target = redirectTo || ('/course-player?course=' + encodeURIComponent(courseId) + '&paid=1');
            showRedirectSuccessToast(name, courseName, response.razorpay_payment_id, target);
          } else {
            // Fallback: original toast behaviour for callers that don't pass a courseId
            showQuickSuccessToast(name, courseName, response.razorpay_payment_id);
          }
        } catch (err) {
          alert(
            `Payment was captured but verification failed: ${err.message}\n` +
            `Please contact info@aifreedom.in with Payment ID: ${response.razorpay_payment_id}`
          );
        }
      },

      modal: {
        ondismiss: function () {
          // Silently dismissed — user can click enroll again
        },
      },
    };

    const rzp = new Razorpay(options);
    rzp.on('payment.failed', function (response) {
      alert(`Payment failed: ${response.error.description}. Please try again.`);
    });
    rzp.open();
  });
}

/* ── Success toast with auto-redirect to course player ─────────────
   Used when checkout is initiated from a course landing page. Shows
   a 2-second confirmation, then sends the student into the player. */
function showRedirectSuccessToast(name, courseName, paymentId, target) {
  // Block further interaction; prevent accidental double-clicks on the page
  document.body.style.overflow = 'hidden';

  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:999999;
    background:rgba(0,0,0,0.8);backdrop-filter:blur(6px);
    display:flex;align-items:center;justify-content:center;padding:16px;
    animation:rzpFadeIn 0.25s ease;
  `;
  overlay.innerHTML = `
    <style>@keyframes rzpFadeIn{from{opacity:0;transform:scale(0.96)}to{opacity:1;transform:scale(1)}}</style>
    <div style="background:#16161f;border:1px solid rgba(0,200,150,0.4);border-radius:18px;padding:36px 32px;max-width:440px;width:100%;text-align:center;box-shadow:0 12px 48px rgba(0,0,0,0.6);">
      <div style="font-size:3.5rem;line-height:1;margin-bottom:12px;">✅</div>
      <div style="color:#4ade80;font-weight:800;font-size:1.35rem;margin-bottom:8px;">Payment Verified</div>
      <div style="color:rgba(255,255,255,0.8);font-size:0.98rem;line-height:1.55;margin-bottom:6px;">
        Welcome, <strong style="color:#fff;">${escapeHtml(name)}</strong>! You're enrolled in
        <strong style="color:#fff;">${escapeHtml(courseName)}</strong>.
      </div>
      <div style="color:rgba(255,255,255,0.55);font-size:0.88rem;margin:18px 0 14px;">Redirecting you to the course…</div>
      <div style="height:4px;background:rgba(255,255,255,0.08);border-radius:2px;overflow:hidden;">
        <div id="rzpRedirectBar" style="height:100%;width:0;background:linear-gradient(135deg,#4ade80,#00c896);transition:width 2s linear;"></div>
      </div>
      <div style="color:rgba(255,255,255,0.3);font-size:0.72rem;margin-top:16px;">Payment ID: ${escapeHtml(paymentId)}</div>
    </div>
  `;
  document.body.appendChild(overlay);

  // Kick off progress bar animation next frame
  requestAnimationFrame(() => {
    const bar = document.getElementById('rzpRedirectBar');
    if (bar) bar.style.width = '100%';
  });

  setTimeout(() => { window.location.href = target; }, 2000);
}

/* ── Success toast for quick checkout ────────────────────────────── */
function showQuickSuccessToast(name, courseName, paymentId) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position:fixed;bottom:30px;left:50%;transform:translateX(-50%);
    z-index:99999;background:#16161f;border:1px solid rgba(0,200,150,0.4);
    border-radius:14px;padding:20px 28px;max-width:420px;width:calc(100% - 32px);
    box-shadow:0 8px 40px rgba(0,0,0,0.5);animation:rzpFadeIn 0.3s ease;
    text-align:center;
  `;
  toast.innerHTML = `
    <div style="font-size:2.5rem;margin-bottom:8px;">✅</div>
    <div style="color:#4ade80;font-weight:700;font-size:1.05rem;margin-bottom:4px;">Payment Successful!</div>
    <div style="color:rgba(255,255,255,0.7);font-size:0.85rem;">
      Hi ${escapeHtml(name)}! You're enrolled in <strong style="color:#fff;">${escapeHtml(courseName)}</strong>.<br>
      We'll send access details to your email shortly.
    </div>
    <div style="color:rgba(255,255,255,0.35);font-size:0.72rem;margin-top:10px;">Payment ID: ${escapeHtml(paymentId)}</div>
    <button onclick="this.closest('[style]').remove()" style="margin-top:14px;background:rgba(255,255,255,0.08);border:none;color:rgba(255,255,255,0.6);border-radius:8px;padding:8px 20px;cursor:pointer;font-size:0.85rem;">Close</button>
  `;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.5s'; setTimeout(() => toast.remove(), 500); }, 12000);
}
