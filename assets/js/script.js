/* ============================================================
   Hyundong Jin · Personal Homepage · script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar shadow on scroll ─────────────────────── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  /* ── Scrollspy: highlight active nav link ────────── */
  const navLinks = document.querySelectorAll('#navbar nav a[href^="#"]');
  const sections = [...navLinks]
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const setActive = () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 90) current = '#' + sec.id;
    });
    navLinks.forEach(a =>
      a.classList.toggle('active', a.getAttribute('href') === current)
    );
  };
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  /* ── Section fade-in on scroll ───────────────────── */
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.06 }
  );
  document.querySelectorAll('.section').forEach(s => observer.observe(s));

});
