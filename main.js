/* ===================================================================
   AI Freedom Institute — Shared JavaScript
   Handles: navbar, mobile menu, scroll animations, counters, forms
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initCounterAnimations();
  initSmoothScroll();
});

/* ===== NAVBAR SCROLL ===== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ===== MOBILE MENU ===== */
function initMobileMenu() {
  const toggle = document.getElementById('navbarToggle');
  const menu = document.getElementById('navbarMenu');
  const overlay = document.getElementById('menuOverlay');
  if (!toggle || !menu) return;

  const closeMenu = () => {
    toggle.classList.remove('active');
    menu.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      toggle.classList.add('active');
      menu.classList.add('open');
      if (overlay) overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });

  if (overlay) overlay.addEventListener('click', closeMenu);

  // Close menu on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ===== SCROLL ANIMATIONS ===== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ===== COUNTER ANIMATIONS =====
   Static HTML holds the final rendered value so crawlers and LLM fetchers
   see real numbers (e.g. "500+") instead of the "0" starting frame. */
function initCounterAnimations() {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  counters.forEach(el => {
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    el.textContent = prefix + '0' + suffix;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.round(eased * target);
    el.textContent = prefix + current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ===== SMOOTH SCROLL ===== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ===== FORM HANDLER ===== */
function handleFormSubmit(e, formType) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('[name="name"]')?.value || '';
  const phone = form.querySelector('[name="phone"]')?.value || '';
  const requirement = form.querySelector('[name="requirement"]')?.value || formType || '';
  const email = form.querySelector('[name="email"]')?.value || '';
  
  const message = `Hi, I'm ${name}.%0APhone: ${phone}%0AEmail: ${email}%0ARequirement: ${requirement}`;
  const waUrl = `https://wa.me/918007280721?text=${message}`;
  
  window.open(waUrl, '_blank');
  
  // Show success
  const btn = form.querySelector('button[type="submit"]');
  if (btn) {
    const original = btn.innerHTML;
    btn.innerHTML = '✓ Redirecting to WhatsApp...';
    btn.style.background = 'var(--success)';
    setTimeout(() => {
      btn.innerHTML = original;
      btn.style.background = '';
      form.reset();
    }, 3000);
  }
}
