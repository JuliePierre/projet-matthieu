$(document).ready(function() {
  $(".button-collapse").sideNav();
  var page = $('nav')[0].id.split("-")[0];
  var links = $('nav ul a')
  links.each(function(i, item) {
    if (item.getAttribute("data-info") == page) {
      $(item).addClass('active');
    };
    if (item.getAttribute("data-info") != page) {
      $(item).removeClass('active');
    };
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 65) {
      $('#index-navbar').addClass('visible');
    }
  });
  $('#parallax-page-index').mousemove(function(event) {
    $('#scrolldown-home').removeClass('hidden');
  });
  $('#scrolldown-home').click(function() {
    var navbarHeight = $('nav').height();
    console.log(navbarHeight);
    var target = $('#first-content').offset().top - navbarHeight;
    $('html, body').animate({ scrollTop: target }, 'slow');
  })
});



