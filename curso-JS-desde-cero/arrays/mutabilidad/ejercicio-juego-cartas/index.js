// Imagina que estás construyendo un juego de cartas simple. Tienes un array y ese array está representado por un mazo de cartas. Quieres:
// 1. Barajar el mazo
// 2. Repartir las cartas en función del número de jugadores utilizando el método de splice().

let mazoDeCartas = ['1🪙', '2🪙', '3🪙', '4🪙', '5🪙', '6🪙', '7🪙', '10🪙', '11🪙', '12🪙', '1🍷', '2🍷', '3🍷', '4🍷', '5🍷', '6🍷', '7🍷', '10🍷', '11🍷', '12🍷','1🗡️', '2🗡️', '3🗡️', '4🗡️', '5🗡️', '6🗡️', '7🗡️', '10🗡️', '11🗡️', '12🗡️', '1🥦', '2🥦', '3🥦', '4🥦', '5🥦', '6🥦', '7🥦', '10🥦', '11🥦', '12🥦'];

// BARAJAR EL MAZO
// Lo encuentro en internet. Funciona, pero no entiendo qué hace...
function barajar() { 
  for(var j, x, i = mazoDeCartas.length; i; j = parseInt(Math.random() * i), x = mazoDeCartas[--i], mazoDeCartas[i] = mazoDeCartas[j], mazoDeCartas[j] = x);
  console.log('Barajo con función barajar: ' + mazoDeCartas);
  return mazoDeCartas;
};
barajar();

// Algoritmo Fisher-Yates. Así lo hace la profesora. Tampoco entiendo qué hace...
function shuffle () {
  // Recorre el array de atrás hacia adelante:
  for (let i = mazoDeCartas.length - 1; i > 0; i--) {
    // Elige un índice aleatorio antes del elemento actual:
    let j = Math.floor(Math.random() * (i+1));
    // Intercambia[a,b] por [b,a]
    [mazoDeCartas[i], mazoDeCartas[j]] = [mazoDeCartas[j], mazoDeCartas[i]];
  };
  console.log('Barajo con función shuffle: ' + mazoDeCartas);
};
shuffle();

//REPARTIR CARTAS
let jugadores = ['jugador-1', 'jugador-2', 'jugador-3'];
//Repartimos 7 cartas a cada jugador. En el mazo deberían de quedar 40-(7*3) = 19 cartas
function repartirCartas (numeroDeCartasARepartir) {
  for (let i = 0; i < jugadores.length; i++) {
    let cartasACadaJugador = mazoDeCartas.splice(0,numeroDeCartasARepartir);
    console.log(jugadores[i] + ': ' + cartasACadaJugador);
  }

//  let cartasJugador1 = mazoDeCartas.splice(0,7);
//  console.log(cartasJugador1);
//
//  let cartasJugador2 = mazoDeCartas.splice(0,7);
//  console.log(cartasJugador2);
//
//  let cartasJugador3 = mazoDeCartas.splice(0,7);
//  console.log(cartasJugador3);
}
repartirCartas(3);
console.log('En el mazo quedan: '+ mazoDeCartas.length +' cartas');