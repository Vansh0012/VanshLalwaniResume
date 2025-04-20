// === 1. Intro Loader & Hero Reveal ===
setTimeout(() => {
  document.getElementById('intro').remove();
  gsap.to('#hero', { opacity: 1, y: 0, duration: 1 });

  // Disable scrolling while hero is visible
  document.body.classList.add('lock-scroll');
}, 4000);

// === 2. “Click to Enter” Behavior ===
document.getElementById('enter-btn').onclick = () => {
  gsap.to('#hero', { y: -100, opacity: 0, duration: 0.8 });
  setTimeout(() => {
    const hero = document.getElementById('hero');
    if (hero) hero.remove();

    // Enable scrolling after hero is gone
    document.body.classList.remove('lock-scroll');

    document.getElementById('main-header').classList.add('show');
    document.getElementById('navbar').classList.add('show');
    revealSections();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 800);
};
// === 1. Intro Loader & Hero Reveal ===
setTimeout(() => {
  document.getElementById('intro').remove();
  gsap.to('#hero', { opacity: 1, y: 0, duration: 1 });
}, 4000);

// === 2. “Click to Enter” Behavior ===
document.getElementById('enter-btn').onclick = () => {
  gsap.to('#hero', { y: -100, opacity: 0, duration: 0.8 });
  setTimeout(() => {
    const hero = document.getElementById('hero');
    if (hero) hero.remove();

    document.getElementById('main-header').classList.add('show');
    document.getElementById('navbar').classList.add('show');
    revealSections();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 800);
};

// === 3. Reveal Sections ===
function revealSections() {
  document.querySelectorAll('section').forEach(section => {
    if (section.id !== 'hero') {
      section.classList.add('visible');
    }
    });
  }


  
  // === 3. Reveal Sections ===
  function revealSections() {
    document.querySelectorAll('section').forEach(section => {
      if (section.id !== 'hero') {
        section.classList.add('visible');
      }
    });
  }
  
  // === 4. Skill Bars Animation on Scroll ===
  const skillBars = document.querySelectorAll('.skill-bar');
  window.addEventListener('scroll', () => {
    skillBars.forEach(bar => {
      if (bar.getBoundingClientRect().top < window.innerHeight) {
        bar.style.width = bar.dataset.width;
      }
    });
  
    // === 10. Scroll-to-Top Button ===
    document.getElementById('scrollTopBtn').style.opacity =
      window.scrollY > 300 ? '1' : '0';
  
    // === 2. Parallax Scrolling (Enhancement #2) ===
    document.querySelectorAll('.parallax').forEach(el => {
      const speed = 0.5;
      el.style.backgroundPositionY = `${window.scrollY * speed}px`;
    });
  });
  
  // === 5. Scroll-to-Top Handler ===
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // === 6. Dark/Light Mode Toggle ===
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  
    const modeBtn = document.getElementById('mode-toggle');
    if (document.body.classList.contains('dark-mode')) {
      modeBtn.style.backgroundColor = '#f5f5dc';
      modeBtn.style.color = '#000';
    } else {
      modeBtn.style.backgroundColor = '#001f3f';
      modeBtn.style.color = '#fff';
    }
  }
  
  // === 7. Ensure Correct Mode Button Color on Load & Click ===
  window.addEventListener('DOMContentLoaded', () => {
    const modeBtn = document.getElementById('mode-toggle');
    modeBtn.addEventListener('click', toggleDarkMode);
    // Initialize button styling without toggling theme
    toggleDarkMode();
    toggleDarkMode();
  });
  
  // === 8. ScrollReveal Animations (Content Animations) ===
  ScrollReveal().reveal('section:not(#hero)', {
    distance: '50px',
    duration: 800,
    easing: 'ease-in-out',
    interval: 200
  });
  
  // === 9. Smooth Scroll for Anchor Links ===
  // Already handled via CSS: html { scroll-behavior: smooth; }
  
  // === 11. Interactive Contact Form Validation & Enhancements ===
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;
  
      ['input[type="email"]', 'textarea'].forEach(selector => {
        const field = contactForm.querySelector(selector);
        field.classList.remove('error');
        if (!field.value.trim() || (selector.includes('email') && !field.value.includes('@'))) {
          field.classList.add('error');
          valid = false;
          // simple shake animation
          field.animate([{ transform: 'translateX(-5px)' }, { transform: 'translateX(5px)' }, { transform: 'translateX(0)' }], { duration: 300 });
        }
      });
  
      if (valid) {
        contactForm.reset();
        alert('Thank you! Your message has been sent.');
      }
    });
  }
  
  // === 12. Feedback Section (Stub for End-User Feedback) ===
  const feedbackSection = document.querySelector('.feedback');
  if (feedbackSection) {
    // Could attach interactive star rating here
    feedbackSection.addEventListener('click', e => {
      if (e.target.matches('.feedback button')) {
        alert('Thanks for your feedback!');
      }
    });
  }
  
  // === 13. Social Feed Embedding Stub ===
  const feed = document.querySelector('.social-feed');
  if (feed) {
    feed.innerHTML = '<div class="post">Loading latest social posts…</div>';
  }
  
  // === 14. Custom Cursor (Enhancement #4) ===
  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  Object.assign(cursor.style, {
    position: 'fixed',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#c27c5a',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    transition: 'background 0.2s, transform 0.1s',
    zIndex: '9999'
  });
  document.body.appendChild(cursor);
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('button, a').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%, -50%) scale(1.5)');
    el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%, -50%) scale(1)');
  });
  
  // === 15. Accessibility Improvements ===
  // e.g., focus outlines are in CSS. You could ensure ARIA roles are toggled here.
  
  // === 16. SEO & Meta Tags ===
  // Already in HTML head, not JS.
  
  // === 17. Lazy-Load Images (Performance Optimization) ===
  const lazyImgs = document.querySelectorAll('img.lazyload');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('lazyloaded');
          io.unobserve(img);
        }
      });
    });
    lazyImgs.forEach(img => io.observe(img));
  }
const toggleBtn = document.getElementById('darkModeToggle');
// Check and set initial mode
const savedMode = localStorage.getItem('mode') || 'light';
body.classList.add(`${savedMode}-mode`);

// Toggle mode on click
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  
  const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('mode', currentMode);
  
  toggleBtn.textContent = currentMode === 'dark' ? '☀️' : '🌙';
});

// Set correct icon on load
toggleBtn.textContent = savedMode === 'dark' ? '☀️' : '🌙';
toggleBtn.textContent = savedMode === 'dark' ? '☀️' : '🌙';
// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Add a dark mode toggle button to the page (optional)
document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
window.addEventListener('load', function() {
  // Hide the loader and show the content when the page is fully loaded
  document.getElementById('preloader').style.display = 'none'; // Hide the preloader
  document.getElementById('content').style.display = 'block'; // Show the content
});
document.querySelectorAll('section').forEach(section => {
  // Only apply the hover effect to sections that don't have the 'no-hover' class
  if (!section.classList.contains('no-hover')) {
    section.addEventListener('mousemove', (e) => {
      const { offsetX, offsetY, target } = e; 
      const { clientWidth, clientHeight } = target; 
      const x = (offsetX / clientWidth) * 100;  // X-axis percentage of mouse position
      const y = (offsetY / clientHeight) * 100; // Y-axis percentage of mouse position
      
      // Use custom properties for cursor movement
      target.style.setProperty('--x', `${(x - 50)}px`); // Adjust the section position to move towards cursor
      target.style.setProperty('--y', `${(y - 50)}px`); // Adjust the section position to move towards cursor
    });

    // Reset the position when mouse leaves the section
    section.addEventListener('mouseleave', () => {
      section.style.setProperty('--x', `0px`);
      section.style.setProperty('--y', `0px`);
    });
  }
});
// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Function to add the 'visible' class when the element is in the viewport
function checkVisibility() {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    if (isElementInViewport(link)) {
      link.classList.add('visible');
    }
  });
}

// Listen for scroll event
window.addEventListener('scroll', checkVisibility);

// Call it initially to apply the animation to already visible elements
checkVisibility();
// Example: Show navbar on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav#navbar');
  if (window.scrollY > 50) { // Or your condition
    navbar.classList.add('show');
  } else {
    navbar.classList.remove('show');
  }
});
// Example: Show navbar on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav#navbar');
  if (window.scrollY > 50) { // Or your condition
    navbar.classList.add('show');
  } else {
    navbar.classList.remove('show');
  }
});
const navLinks = document.querySelectorAll('nav#navbar a');
await setElementStyles(navLinks, { opacity: '1' });
const data = {
    isFixed: true,
};