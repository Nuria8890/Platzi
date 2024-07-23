/*
switch(expresión) {
case valor1:
  código a ejecutar
  break;
case valor2:
  código a ejecutar
  break;
case valor3:
  código a ejecutar
  break;
.
.
.
default:
    código a ejecutar
}
*/

let expresion = "Uvas"

switch(expresion) { // ===
  case "Najanjas":
    console.log("Las naranjas valen $20/kg")
    break;
  case "Manzanas":
    console.log("Las manzanas valen $43/kg")
    break;
  case "Plátanos":
    console.log("Los plátanos valen $30/kg")
    break;
  case "Mangos":
  case "Papayas":
    console.log("Los mangos y las papallas valen $25/kg")
    break;
  default:
    console.log(`Lo siento, no tenemos ${expresion}`)
}
console.log("¿Hay algo más que desees?")