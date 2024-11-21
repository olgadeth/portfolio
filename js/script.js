// Smooth Scrolling for Arrow
document.querySelector('.scroll-arrow').addEventListener('click', function (e) {
  e.preventDefault();
  const targetSection = document.querySelector(this.getAttribute('href'));
  targetSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

