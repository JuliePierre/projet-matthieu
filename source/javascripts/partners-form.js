$(document).ready(function() {
  $('form input').focusin(function() {
    console.log('enter');
    var target = $('#banner-partenaires').offset().top;
    $('html, body').animate({ scrollTop: target }, 'slow');
    $(this).removeAttr('placeholder');
  });
  $('form textarea').focusin(function() {
    var target = $('#banner-partenaires').offset().top;
    $('html, body').animate({ scrollTop: target }, 'slow');
    $(this).removeAttr('placeholder');
  });
  $('#nom-utilisateur').focusout(function() {
    if ($(this).val() == "") {
      console.log('exit');
      $(this).attr('placeholder', "Votre nom");
    }
  });
  $('#email-utilisateur').focusout(function() {
    if ($(this).val() == "") {
      console.log('exit');
      $(this).attr('placeholder', "Votre email");
    }
  });
  $('form textarea').focusout(function() {
    if ($(this).val() == "") {
      console.log('exit');
      $(this).attr('placeholder', "Entrez ici votre texte");
    }
  });

  // $('form textarea').focusin(function() {
  //   var target = $('#banner-partenaires').offset().top;
  //   $('html, body').animate({ scrollTop: target }, 'slow');
  //   $(this).removeAttr('placeholder');
  // });
});
