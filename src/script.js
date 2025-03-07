const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 24, // Add space between slides
  breakpoints: {
    // Responsive breakpoints
    320: {
      // when window width is >= 320px
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
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
