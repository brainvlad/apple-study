$(document).ready(function () {
  $(".spoiler__line").click(function (event) {
    if ($(".spoiler").hasClass("one")) {
      $(".spoiler__line").not($(this)).removeClass("active");
      $(".spoiler__content").not($(this).next()).slideUp("active");
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});
