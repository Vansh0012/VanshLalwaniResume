// Loader functionality
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
  });
  
  // Parallax Effect
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    document.querySelector('.parallax').style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
  });
  
  // Scroll-triggered fade-in
  window.addEventListener('scroll', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      if (elementPosition < window.innerHeight - 100) {
        element.classList.add('visible');
      }
    });
  });
  
  // Scroll-to-top button
  const scrollToTopButton = document.getElementById('scrollToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Skill charts (if you want to animate them)
  document.addEventListener('DOMContentLoaded', () => {
    const charts = document.querySelectorAll('.chart');
    charts.forEach(chart => {
      chart.style.width = chart.getAttribute('data-skill') + '%';
    });
  });
  