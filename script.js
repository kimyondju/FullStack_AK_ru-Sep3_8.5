const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,

  
  slidesPerView: 'auto',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

 


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});