// Funciones puras: siempre vamos a recibir la misma entrada, y siempre vamos a obtener la misma salida.
function sum (a, b) {
  return a + b
}

function square(x) {
  return x * x
}

function addTen (y) {
  return y + 10
}

const number = 5
const finalResult = addTen(square(number)) // La combinación de dos funciones puras, sigue siendo una función pura
console.log(finalResult)
// Funciones impuras: aquellas que tienen efectos secundarios (Side Effects), es decir, escribir el código de tal manera que haga que nuestra función deje de ser pura.

// 1. Modificar variables globales: acceder a otras variables que tengamos en nuestro código dentro de una función.
let total = 0
let e = 1
function sumWithSideEffect () { 
  total += e // total = total + e. La variable total es una variable global, y según vamos trabajando vamos a ir modificando esa variable global.
  return total
}
console.log('total = ' + total + ' + ' +  e + ' --> ' +  sumWithSideEffect())
console.log('total = ' + total + ' + ' +  e + ' --> ' + sumWithSideEffect())
console.log('total = ' + total + ' + ' +  e + ' --> ' + sumWithSideEffect())
// 2. Modificar parámetros en una función
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en la consola o pantalla (console.log())
const caca = 5
const dedo = 2

function sum (c, d) {
  console.log('C: ', c) // Al poner console.log se convierte en impura.
  return c + d
}
sum (caca, dedo)
// 5. Manipulación del DOM
// 6. Acceder a la hora o día actual




