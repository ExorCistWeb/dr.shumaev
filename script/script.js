// Инициализация слайдеров
function initSwipers() {
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

  new Swiper(".rating-slider", {
    loop: true,
    slidesPerGroup: 1,
    slidesPerView: 3,
    spaceBetween: 14,
    navigation: {
      nextEl: ".rating-button-next",
      prevEl: ".rating-button-prev",
    },
  });

  new Swiper(".doctors-slider", {
    loop: true,
    slidesPerGroup: 1,
    slidesPerView: 2,
    spaceBetween: 105,
    centeredSlides: false,
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
}

document.addEventListener("DOMContentLoaded", function () {
  initSwipers();
});



function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
}

const form1Modal = document.querySelector(".modal");
const closeModalButton = form1Modal.querySelector(".close");
closeModalButton.addEventListener("click", function() {
  form1Modal.style.display = "none";
});

document.getElementById('form1').addEventListener('submit', function(event) {
  send(event, "form1");
});


function send(event, formId) {
  event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  const form = document.getElementById(formId);
  const req = new XMLHttpRequest();
  req.open("POST", "send.php", true);
  req.onload = function () {
    if (req.status >= 200 && req.status < 400) {
      const { result } = JSON.parse(this.response);
      console.log(result);

      const modal = document.getElementById("result-modal");
      const messageElem = modal.querySelector(".modal-message");

      messageElem.textContent = result === "success" ? "Сообщение отправлено" : "Ошибка. Сообщение не отправлено";
      modal.style.display = "block";
    } else {
      alert(`Ошибка сервера. Номер: ${req.status}`);
    }
  };

  req.onerror = function () {
    alert("Ошибка отправки запроса");
  };
  
  const formData = new FormData(form);
  req.send(formData);
}

const submitBtns = document.getElementsByClassName("submit-btn");

Array.from(submitBtns).forEach((btn) => {
  btn.addEventListener("click", (event) => {
    send(event, "form1");
  });
});

const hamburger = document.querySelector('.hamburger');
const menuOverlay = document.querySelector('.menu-overlay');

if (hamburger && menuOverlay) {
  hamburger.addEventListener('click', () => {
    menuOverlay.classList.toggle('active');
  });
}

const columnTitles = document.querySelectorAll('.footer__column h5');
columnTitles.forEach((title) => {
  title.addEventListener('click', () => {
    const column = title.parentNode;
    const links = column.querySelectorAll('a');
    if (links[0].style.display === 'none') {
      links.forEach((link) => {
        link.style.display = 'block';
      });
    } else {
      links.forEach((link) => {
        link.style.display = 'none';
      });
    }
  });
});

for (const btn of submitBtns) {
  btn.addEventListener("click", (event) => {
    send(event, "form1");
  });
}
