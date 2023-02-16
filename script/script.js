// document.querySelector(".burger-button").addEventListener("click", () => {
//   document.querySelector(".burger-button").classList.toggle("active");
// });

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
  slidesPerView: 4.3,
  loop: true,

  spaceBetween: 14,
  slidesPerGroup: 1,
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    375: {
      slidesPerView: 1.3,
    },
    768: {
      slidesPerView: 3.3,
    },
    1790: {
      slidesPerView: 4,
    },
    1920: {
      slidesPerView: 4.3,
    },
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
  breakpoints: {
    375: {
      slidesPerView: 1.3,
    },
    768: {
      slidesPerView: 3.8,
    },
    1790: {
      slidesPerView: 3.8,
    },
    1920: {
      slidesPerView: 4,
    },
  },
});

// Default options
// new Accordion(".accordion-container");

// User options
// new Accordion(".container-second", {
//   duration: 400,
//   showMultiple: true,
//   onOpen: function (currentElement) {
//     console.log(currentElement);
//   },
// });


var openModalButton = document.getElementById("form1-button");
var form1Modal = document.getElementById("form1-modal");

openModalButton.addEventListener("click", function() {
  form1Modal.style.display = "block";
});

var closeModalButton = form1Modal.querySelector(".close");
closeModalButton.addEventListener("click", function() {
  form1Modal.style.display = "none";
});

var form1 = document.getElementById("form1");
form1.addEventListener("submit", function(event) {
  event.preventDefault();
  // form1Modal.style.display = "none";
});

// Отправка данных на сервер
function send(event, php){
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  var req = new XMLHttpRequest();
  req.open('POST', php, true);
  req.onload = function() {
      if (req.status >= 200 && req.status < 400) {
          json = JSON.parse(this.response); // Ебанный internet explorer 11
          console.log(json);
          
          // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
          if (json.result == "success") {
              // Если сообщение отправлено
              alert("Сообщение отправлено");
          } else {
              // Если произошла ошибка
              alert("Ошибка. Сообщение не отправлено");
          }
      // Если не удалось связаться с php файлом
      } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
  
  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function() {alert("Ошибка отправки запроса");};
  req.send(new FormData(event.target));
  }