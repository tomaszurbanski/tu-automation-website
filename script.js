'use strict';

// ── NAV SCROLL ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 50
    ? 'rgba(8,12,20,0.97)'
    : 'rgba(8,12,20,0.85)';
}, { passive: true });

// ── HAMBURGER ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── TYPED TEXT ──
const words = ['dla przemysłu.', 'sterowania PLC.', 'SCADA i HMI.', 'dla robotów UR.'];
let wi = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed');
function type() {
  const word = words[wi];
  if (!deleting) {
    typedEl.textContent = word.slice(0, ++ci);
    if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    typedEl.textContent = word.slice(0, --ci);
    if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; setTimeout(type, 300); return; }
  }
  setTimeout(type, deleting ? 40 : 70);
}
type();

// ── REVEAL ON SCROLL ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ── COUNTER ANIMATION ──
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    let current = 0;
    const step = Math.ceil(target / 40);
    const suffix = el.nextElementSibling?.textContent.includes('doświad') ? '+' : '+';
    const tick = () => {
      current = Math.min(current + step, target);
      el.textContent = current + (current === target ? '+' : '');
      if (current < target) requestAnimationFrame(tick);
    };
    tick();
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(el => counterObserver.observe(el));

// ── CONTACT FORM ──
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    submitBtn.textContent = 'Wysyłanie...';
    submitBtn.disabled = true;
    setTimeout(() => {
      submitBtn.textContent = '✓ Wysłano — odpiszę w ciągu 48h';
      submitBtn.style.background = '#10B981';
      submitBtn.style.clipPath = 'none';
    }, 1200);
  });
}

// ── ACTIVE NAV LINK ──
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? '#00D4FF' : '';
  });
}, { passive: true });
