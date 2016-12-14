$(function(){
  var interval = setInterval(increment, 8000); // 1000ms = 1 second

  function increment() {
    console.log('titi')
    for (var i = 0; i < 200; i += 1) {
      $('#counter').val(i);
    }
  }
});
