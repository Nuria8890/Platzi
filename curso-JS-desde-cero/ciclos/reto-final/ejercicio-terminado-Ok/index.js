/*
ADIVINA LA PALABRA

El usuario tiene tres intentos para adivinar la palaba oculta.

Requerimientos:
- El juego debe tener una palabra oculta.
- El juego puede dar una pista de la palabra.
- El usuario debe ingresar una suposición.
- El juego debe verificar si la suposición del usuario es correcta.
- El juego debe tener un número limitado de intentos.
- El juego debe terminar cuando el usuario adivine la palabra o se queda sin intentos.
*/

const palabras = ["abeja", "canal", "fresa", "latir", "pesca", "viral", "traza", "tonto", "torno", "cazar", "sufro", "suero", "cuero", "tacha", "señas", "roble", "rozan", "punta", "plano", "playa", "naipe", "marte", "fisio", "falsa", "falda"]
console.log(palabras.length);

let idPalabraOculta = Math.floor(Math.random()*palabras.length);
palabraOculta = palabras[idPalabraOculta];
console.log(palabraOculta);

let intentos = 3;

do {
  palabraDelUsuario = prompt(`Introduce palabra. Tienes ${intentos} intentos`);
  intentos--;
  console.log(intentos);
  if (palabraDelUsuario.toLowerCase() == palabraOculta){
    break;
  }
} while (intentos > 0);

/*
let palabraDelUsuario = prompt("Introduce una palabra de 5 letras")

while (palabraDelUsuario != palabraOculta) {
  palabraDelUsuario = prompt ("Continúa intentándolo")
}
*/

if (palabraDelUsuario.toLowerCase() == palabraOculta) {
  alert("Enhorabuena!! Has adivinado la palabra oculta 😎");
} else {
  alert(`Oooohhh has perdido!!! La palabra era ${palabraOculta}. Inténtalo de nuevo 😉`);
}