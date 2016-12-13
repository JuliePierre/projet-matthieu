$(document).ready(function() {

  $(window).scroll(function () {
    console.log('test navbar js')
    if ($(window).scrollTop() > 65) {
      $('#full-navbar').removeClass('transparent-navbar');
    }
    if ($(window).scrollTop() < 65) {
      $('#full-navbar').addClass('transparent-navbar');
    }
  });
});
