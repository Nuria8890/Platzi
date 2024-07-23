const numeroSecreto = Math.floor(Math.random() * 10 + 1);

console.log(`El número secreto es ${numeroSecreto}`);

const numeroJugador = parseInt (prompt ("Adivina el número secreto entre el 1 y el 10"));

console.log(`Este es el número con el que juegas ${numeroJugador}`);

if (numeroJugador === numeroSecreto) {
  console.log("¡¡Felicidades, adivinaste el número secreto!!");
} else {
  console.log("Inténtalo de nuevo");
}