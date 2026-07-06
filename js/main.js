// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Marketing tabs
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(target)?.classList.add('active');
  });
});

// Contact form
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value;
  form.innerHTML = `
    <div class="form-success">
      <div class="success-icon">✨</div>
      <h3>درخواست شما ثبت شد</h3>
      <p>ممنون ${name} عزیز! تیم ارغوان در کمتر از ۲۴ ساعت با شما تماس می‌گیرد.</p>
    </div>
  `;
});

// Scroll reveal
const revealElements = document.querySelectorAll(
  '.service-card, .pack-card, .why-card, .flow-step, .about-text'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

revealElements.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.6s ${i * 0.05}s ease, transform 0.6s ${i * 0.05}s ease`;
  observer.observe(el);
});
