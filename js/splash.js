/* Vista splash de index a sesion en 3 segundos */
$(document).ready(function () {
  // setTimeout(function() { 
  //   window.location.href = 'views/sesion.html';
  // }, 3000);
  $('.title').animate({
    marginBottom: '5in',
    color: '#f0dc5b'
  }, 5000);
  // animación del logo
  $('.logo').animate({
    opacity: 0,
    marginBottom: '5in'
  }, 5000);
  // mostrar la vista main después de cinco segundos
  setTimeout(function () {
    window.location.href = 'views/sesion.html';
  }, 5000);
});