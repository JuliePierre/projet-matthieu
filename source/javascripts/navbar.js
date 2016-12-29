$(document).ready(function() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 65) {
      $('#index-navbar').removeClass('index');
    }
    if ($(window).scrollTop() < 65) {
      $('#index-navbar').addClass('index');
    }
  });
});
