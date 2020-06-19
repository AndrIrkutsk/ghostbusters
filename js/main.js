$(document).ready(function () {
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");

  $(window).resize(function () {
    if ($(window).innerWidth() > 752) {
      $("body").removeClass("no-scroll");
    }
  });
  mMenuBtn.on("click", function () {
    $("body").toggleClass("no-scroll");
    mMenu.toggleClass("active");
    mMenu.toggleClass("out");
  });

  //initialize swiper when document ready
  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    // Responsive breakpoints
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
  });

  // jQuery tabs classes
  $("#tabs").tabs();
  $("#tabs").tabs("option", "classes.ui-tabs", "highlight");
});
