// ===== Mobile nav =====
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll(
  '.section, .card, .feature, .member, .hero-card, .stat'
);
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// ===== Animated stat counters =====
const counters = document.querySelectorAll('.stat strong[data-count]');
const cObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.count;
    const dur = 1400;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + (p === 1 ? '+' : '');
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    cObs.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => cObs.observe(c));

// ===== Contact form (front-end only) =====
const form = document.getElementById('enrollForm');
const note = document.getElementById('formNote');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }
  note.hidden = false;
  form.querySelector('button').textContent = 'Ուղարկված է ✓';
  setTimeout(() => form.reset(), 400);
});
