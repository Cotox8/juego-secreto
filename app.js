
 let numeroSecreto = 0;
 let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo  = 10;
 //console.log(numeroSecreto);

function verificarIntento()
{

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value) ;
    console.log(intentos);
    if (numeroSecreto===numeroDeUsuario)
    {

        asignarTextoDocumento('P', `Acertaste el numero en ${intentos} ${ (intentos===1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
    
          if (numeroDeUsuario > numeroSecreto) 
          {
            asignarTextoDocumento('P', 'El numero es menor');
          } else 
          {
            asignarTextoDocumento('P', 'el numero es mayor');
          }
         intentos++;
         limpiarCaja();
      
    }
    
    return;    
}

function limpiarCaja ()
{

  let valorCaja = document.querySelector('#valorUsuario');
  valorCaja.value = '';
}

function asignarTextoDocumento (elemento, texto)
{

    let elementoHTML = document.querySelector(elemento);

    elementoHTML.innerHTML=texto;

}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);


    if (listaNumerosSorteados.length == numeroMaximo) {
          asignarTextoDocumento('P', 'Ya se sortearon todos los numeros posibles');
    } else {
      //if el numero generado esta incluido en la lista    
      if (listaNumerosSorteados.includes(numeroGenerado))
      {
          return generarNumeroSecreto();
      }else{
        listaNumerosSorteados.push(numeroGenerado) 
        return numeroGenerado

      }
  }
     
}

function condicionesIniciales()
{

  asignarTextoDocumento('h1','Juego del numero secretoo');
   asignarTextoDocumento('p',`Indica un número del 1 al ${numeroMaximo}`); 
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;

}

function reiniciarJuego()
{
  //Limpiar la caja
  limpiarCaja();
  //indicar mensaje de intevalo de numeros
  condicionesIniciales();
 
  document.querySelector('#reiniciar').setAttribute('disabled', true);
  
  //deshabilitar el boton de nuevo juego


}

condicionesIniciales();