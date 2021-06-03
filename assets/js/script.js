// Mobile Nav
const openNav = () => {
  document.getElementById("mySidenav").style.width = "300px";
};
const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
};

$(".product-swiper-threee").slick({
  dots: true,
  infinite: false,
  speed: 300,
  dots: false, 
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: `<img src="assets/img/arrrow-l.png" class="arrow-abs-left" >`,
  nextArrow: `<img src="assets/img/arrrow-r.png" class="arrow-abs-right" >`,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


$(".product-swiper-five").slick({
  dots: true,
  infinite: false,
  speed: 300,
  dots: false, 
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: `<img src="assets/img/arrrow-l.png" class="arrow-abs-left" >`,
  nextArrow: `<img src="assets/img/arrrow-r.png" class="arrow-abs-right" >`,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// // discussion form script
// if( screen.width > 1080 ){

//   $('#sec-main-menu-discussionID:first').children().first().addClass("container");
//   $('#sec-main-menu-discussionID:first').children().first().removeClass("container-fluid");

// }

$(document).ready(function () {
  if (screen.width > 1900) {
    $("#sec-main-menu-discussionID:first").addClass("container");
    $("#sec-main-menu-discussionID:first").removeClass("container-fluid");
    $("#sec-main-menu-discussionID:first").removeClass("px-md-5");
  }
});
