const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 8, // Add space between slides
  breakpoints: {
    // Responsive breakpoints
    320: {
      // when window width is >= 320px
      slidesPerView: 2,
      spaceBetween: 8,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    800: {
      // when window width is >= 320px
      slidesPerView: 4,
      spaceBetween: 16,
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
const primaryNav = document.querySelector('#primary-navigation');
const navToggle = document.querySelector('.icons');
const close = document.querySelector('.bx-x');
const menu = document.querySelector('.bx-menu');
console.log(navToggle);
if (navToggle) {
  navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('hide');
    navToggle.setAttribute('aria-expanded', 'false');
    close.classList.toggle('hidden');
    menu.classList.toggle('hidden');
    if (menu.classList.contains('hidden')) {
      navToggle.setAttribute('aria-expanded', 'true');
    }
  });
}
