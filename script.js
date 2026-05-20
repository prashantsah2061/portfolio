/* ══════════════════════════════════════════════════
   PRASHANT SAH — PORTFOLIO SCRIPT
   script.js
══════════════════════════════════════════════════ */

/* ── CUSTOM CURSOR ──────────────────────────────────────────────── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
}
animRing();

/* ── SCROLL PROGRESS BAR ────────────────────────────────────────── */
const progressBar = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const total = document.body.scrollHeight - window.innerHeight;
  progressBar.style.width = (window.scrollY / total * 100) + '%';
});

/* ── NAV SCROLL STATE + BACK TO TOP VISIBILITY ─────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('btt').classList.toggle('show', window.scrollY > 400);
});

/* ── HAMBURGER / MOBILE MENU ────────────────────────────────────── */
const ham = document.getElementById('ham');
const mob = document.getElementById('mobileMenu');

ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  mob.classList.toggle('open');
});

document.querySelectorAll('.mm-link').forEach(a => {
  a.addEventListener('click', () => {
    ham.classList.remove('open');
    mob.classList.remove('open');
  });
});

/* ── SMOOTH SCROLL FOR ANCHOR LINKS ────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    }
  });
});

/* ── BACK TO TOP BUTTON ─────────────────────────────────────────── */
document.getElementById('btt').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── INTERSECTION OBSERVER — SECTION REVEALS ───────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── INTERSECTION OBSERVER — TIMELINE STAGGER ──────────────────── */
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.12) + 's';
  timelineObserver.observe(el);
});

/* ── DOWNLOAD RESUME ────────────────────────────────────────────── */
function downloadResume() {
  const link = document.createElement('a');
  link.href = 'resume.pdf';
  link.download = 'Prashant_Sah_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
