$(document).ready(function() {
  $('#point-blanc').click(function(){
    $('html,body').animate({
        scrollTop: $("#first-content").position().top - 60 },
        1000);
  });
});
