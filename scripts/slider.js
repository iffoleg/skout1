$(document).ready(function () {
  var slickOpts = {
    prevArrow: $(".arrow-prev"),
    nextArrow: $(".arrow-next"),
    slidesToShow: 1,
    slidesToScroll: 1,
    easing: "swing",
    speed: 700,
  };
  $("#carousel").slick(slickOpts);
});

//

// $("#carousel").slick({
//   prevArrow: $(".arrow-prev"),
//   nextArrow: $(".arrow-next"),
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: ".slider-nav",
// });
// $(".slider-titles").slick({
//   prevArrow: $(".arrow-prev"),
//   nextArrow: $(".arrow-next"),
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: "#carousel",
//   dots: false,
//   arrows: false,
//   focusOnSelect: true,
// });
