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

function readMore() {
  var more = document.getElementById("more");
  var more1 = document.getElementById("more1");
  var btn = document.getElementById("btn");
  if (more.style.display === "none") {
       more.style.display = "flex";
       more1.style.display = "flex";
       btn.innerHTML = "Скрыть";
  } else {
       more.style.display = "none";
       more1.style.display = "none";
       btn.innerHTML = "Показать все";
   
  }
}
