const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 8, // Add space between slides
  breakpoints: {
    // Responsive breakpoints
    320: {
      // when window width is >= 320px
      slidesPerView: 4,
      spaceBetween: 12,
    },
    1040: {
      // when window width is >= 768px
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');
  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', 'true');
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    primaryNav.setAttribute('data-visible', 'false');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
