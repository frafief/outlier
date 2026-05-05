/* ================================================
   OUTLIER by frafief — Main JavaScript
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile hamburger menu ---
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });
  }

  // --- Mobile dropdown toggle ---
  const dropdown = document.querySelector('.nav-dropdown > a');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  if (dropdown && dropdownMenu) {
    dropdown.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdownMenu.classList.toggle('show');
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        dropdownMenu.classList.remove('show');
      }
    });
  }

  // --- Tag filtering (articles page) ---
  const filterBtns = document.querySelectorAll('.tag-filter-btn');
  const articleCards = document.querySelectorAll('.article-card[data-tags]');

  if (filterBtns.length && articleCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter articles
        articleCards.forEach(card => {
          if (filter === 'all') {
            card.classList.remove('hidden');
          } else {
            const tags = card.dataset.tags.split(',');
            if (tags.includes(filter)) {
              card.classList.remove('hidden');
            } else {
              card.classList.add('hidden');
            }
          }
        });
      });
    });

    // Check URL params for pre-filtering
    const urlParams = new URLSearchParams(window.location.search);
    const tagParam = urlParams.get('tag');
    if (tagParam) {
      const targetBtn = document.querySelector(`.tag-filter-btn[data-filter="${tagParam}"]`);
      if (targetBtn) {
        targetBtn.click();
      }
    }
  }

  // --- Fade-up on scroll ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.observe').forEach(el => {
    observer.observe(el);
  });

});
