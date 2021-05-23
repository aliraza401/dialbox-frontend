// Mobile Nav
const openNav = () => {
  document.getElementById("mySidenav").style.width = "300px";
};
const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
};

// // search validation
// function validateAreaInputField() {
//   console.log("HHHHHEEEEERRRRRRREEEEEEEEEEE");
//   if (document.getElementById("InputAreaValidate").length > 0) {
//     document.getElementById("InputAreaValidate").style.background = "none";
//   }
// }

// $(document).ready(function () {
//   $("#InputAreaValidate").change(function () {
//     alert("Handler for .change() called.");
//   });
// });

// main slider
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

// product slider
const productSwiper = new Swiper(".product-swiper-threee", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 300,
  spaceBetween: 100,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      spaceBetween: 30,
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 80,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
  },
});
