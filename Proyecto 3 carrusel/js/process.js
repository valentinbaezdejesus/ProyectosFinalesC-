var proceso;
$(document).ready(function () {
  var actualIndice = 0;
  var objetos = $('.contenedor div');
  var numObjetos = objetos.length;
  function cambiarImagen() {
    var imagen = objetos.eq(actualIndice);
    objetos.hide();
    imagen.css('display', 'inline-block');
  }
  proceso = setInterval(function () {
    actualIndice += 1;
    if (actualIndice > (numObjetos - 1)) {
      actualIndice = 0;
    }
    cambiarImagen();
  }, 3000);

  // funcion siguiente
  $('.siguiente').click(function () {
    limpiarIntervalo();
    actualIndice += 1;
    if (actualIndice > (numObjetos - 1)) {
      actualIndice = 0;
    }
    cambiarImagen();
  });

  // Funcion anterior
  $('.anterior').click(function () {
    limpiarIntervalo();
    actualIndice -= 1;
    if (actualIndice < 0) {
      actualIndice = numObjetos - 1;
    }
    cambiarImagen();
  });
});

// funcion limpiar
function limpiarIntervalo() {
  window.clearInterval(proceso);
}