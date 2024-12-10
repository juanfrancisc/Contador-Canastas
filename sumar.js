let numero = 0;
/*boton.onclick = () => {
 numero++;
 mostrador.value = numero;
}*/

/*onkeypress = () => {
    numero++;
    mostrador.value = numero;
   }*/

window.onload = function() {
    document.onkeyup = muestraInformacion;
    /*document.onkeypress = muestraInformacion;
    /*document.onkeydown = muestraInformacion;*/
  }
  
  function muestraInformacion(elEvento) {
    var evento = window.event || elEvento;
    console.log(evento.keyCode)
    if (evento.keyCode === 33){
        numero++;
        mostrador.value = numero;
        donativo.value=numero*15;
    } else {
        numero--;
        mostrador.value = numero;
        donativo.value=numero*15+"€";
    }

        
  }