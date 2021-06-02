// Mobile Nav
const openNav = () => {
  document.getElementById("mySidenav").style.width = "300px";
};
const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
};

// main slider
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 100,
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

// // discussion form script
// if( screen.width > 1080 ){

//   $('#sec-main-menu-discussionID:first').children().first().addClass("container");
//   $('#sec-main-menu-discussionID:first').children().first().removeClass("container-fluid");

// }


$( document ).ready(function() {
  if( screen.width>1900 ){
    $('#sec-main-menu-discussionID:first').addClass("container");
    $('#sec-main-menu-discussionID:first').removeClass("container-fluid");
    $('#sec-main-menu-discussionID:first').removeClass("px-md-5");
  }
}); 