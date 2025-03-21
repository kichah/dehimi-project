import Swiper from '/public/swiper/swiper-bundle.min.mjs';
const primaryNav = document.querySelector('#primary-navigation');
const navToggle = document.querySelector('.icons');
const close = document.querySelector('.fa-x');
const menu = document.querySelector('.fa-bars');
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
const mainPage = document.querySelector('.main-page');
if (mainPage) {
  const swiperProducts = new Swiper('.product-slider', {
    slidesPerView: 2,
    spaceBetween: 8,
    loop: true,
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

  const swiperTestimonials = new Swiper('.testimonial', {
    slidesPerView: 1,
    spaceBetween: 8, // Add space between slides
    breakpoints: {
      // Responsive breakpoints
      800: {
        // when window width is >= 320px
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1040: {
        // when window width is >= 768px
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

const swiperProductPage = new Swiper('.image-swiper', {
  slidesPerView: 1,
  spaceBetween: 8,
  loop: true,
  navigation: {
    nextEl: '.next-img',
    prevEl: '.prev-img',
  },
  breakpoints: {
    // Responsive breakpoints
    720: {
      // when window width is >= 768px
      slidesPerView: 4,
      spaceBetween: 8,
    },
    1040: {
      // when window width is >= 768px
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
