// Speaking of Grace — main.js
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Sticky header on scroll ---------- */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 30) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- Article category filter ---------- */
  const chips = document.querySelectorAll('.filter-chip');
  const articles = document.querySelectorAll('.article-card');
  if (chips.length) {
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const cat = chip.dataset.filter;
        articles.forEach(card => {
          if (cat === 'all' || card.dataset.category === cat) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ---------- Book tabs ---------- */
  const bookTabs = document.querySelectorAll('.book-tab');
  const bookPanels = document.querySelectorAll('.book-panel');
  if (bookTabs.length) {
    bookTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        bookTabs.forEach(t => t.classList.remove('active'));
        bookPanels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.panel).classList.add('active');
      });
    });
  }

  /* ---------- Resource audience tabs ---------- */
  const audienceBtns = document.querySelectorAll('.audience-btn');
  const resourcePanels = document.querySelectorAll('.resource-panel');
  if (audienceBtns.length) {
    audienceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        audienceBtns.forEach(b => b.classList.remove('active'));
        resourcePanels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.panel).classList.add('active');
      });
    });
  }

  /* ---------- Contact form (front-end only demo) ---------- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('form-status');
      status.textContent = "Thank you — your message has been received. I'll respond as soon as I can.";
      status.classList.add('show', 'ok');
      contactForm.reset();
    });
  }

  /* ---------- Newsletter form (front-end only demo) ---------- */
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = newsletterForm.querySelector('button');
      const original = btn.textContent;
      btn.textContent = 'Subscribed ✓';
      newsletterForm.reset();
      setTimeout(() => { btn.textContent = original; }, 3000);
    });
  }

});
