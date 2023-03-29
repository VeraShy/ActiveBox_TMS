import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Pagination]);

const swiper = new Swiper('.reviews-slider', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },
  });   


const header = document.querySelector('.header'); 
window.addEventListener('scroll', function() {
   
  if (window.scrollY >= 10) {
    header.classList.add('header_scrolling'); 
  } else {
    header.classList.remove('header_scrolling');
  }
});
