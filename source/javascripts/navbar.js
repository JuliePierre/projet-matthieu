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
      $('#index-navbar').removeClass('index');
    }
  });

  $('#parallax-page-index').mousemove(function(event) {
    // $('#index-navbar').removeClass('index');
    $('#scrolldown-home').removeClass('hidden');
    // $('html, body').animate({
    //   scrollTop: $('#first-content').offset().top
    // }, 'slow');
  });

  $('#scrolldown-home').click(function(event) {
    var targetPosition = $('#first-content').offset().top;
    var target = $('#first-content').offset().top - targetPosition;
    $('html, body').animate({ scrollTop: target }, 'slow');
  })
});



