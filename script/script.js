 new Swiper(".swiper-usual", {
     pagination: {
         el: ".products-pagination",
     },

     loop: true,
     slidesPerView: 1,

     navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
     },
 });

 new Swiper(".patients-slider", {
     autoplay: {
         delay: 3500,
         disableOnInteraction: false,
     },

     loop: true,

     slidesPerView: 4.3,
     spaceBetween: 14,
     slidesPerGroup: 1,
     centeredSlides: true,

     navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
     },
 });

 new Swiper(".rating-slider", {
     // autoplay: {
     //   delay: 3500,
     //   disableOnInteraction: false,
     // },

     loop: true,

     slidesPerGroup: 1,
     slidesPerView: 3,
     spaceBetween: 14,
     // centeredSlides: true,

     navigation: {
         nextEl: ".rating-button-next",
         prevEl: ".rating-button-prev",
     },
 });

 new Swiper(".doctors-slider", {
     // autoplay: {
     //   delay: 3500,
     //   disableOnInteraction: false,
     // },
     loop: true,
     slidesPerGroup: 1,
     slidesPerView: 2,
     spaceBetween: 105,
     centeredSlides: true,

     navigation: {
         nextEl: ".doctors-button-next",
         prevEl: ".doctors-button-prev",
     },
 });

 new Swiper(".clinic-swiper", {
     slidesPerView: "auto",
     loop: true,
     spaceBetween: 30,

     navigation: {
         nextEl: ".clinic-button-next",
         prevEl: ".clinic-button-prev",
     },
 });

 new Swiper(".repairing-slider", {
     slidesPerGroup: 1,
     slidesPerView: 4,
     spaceBetween: 28,
     centeredSlides: true,

     loop: true,

     navigation: {
         nextEl: ".repairing-button-next",
         prevEl: ".repairing-button-prev",
     },
 })

 // Default options
 new Accordion('.accordion-container');

 // User options
 new Accordion('.container-second', {
     duration: 400,
     showMultiple: true,
     onOpen: function(currentElement) {
         console.log(currentElement);
     }
 });