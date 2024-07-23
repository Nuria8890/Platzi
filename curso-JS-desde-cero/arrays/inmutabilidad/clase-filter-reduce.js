// .filter(): crea un nuevo array con los elementos del array original que cumplen una condición dada por una función.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = numeros.filter(numero => numero % 2 === 0) // Devolverá los números pares. Por ejemplo, si tenemos 4 % 2, el resultado es 0 (4/2 = 2 y el resto es 0). Si tenemos 5 % 2, el resultado sería 1 (5/2 = 2 con un resto de 1).
console.log('El array números es: ' + numeros); // El array numeros es: 1,2,3,4,5,6,7,8,9,10

console.log('Los números pares son: ' + numerosPares); // Los números pares son: 2,4,6,8,10


//.reduce(): ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

const numerosReduce = [1, 2, 3, 4, 5];
const sum = numerosReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // accumulator: acumula el valor de la suma de cada uno de los datos. currentValue: cada uno de los valores del array.
console.log('El array de números es: ' + numerosReduce); // El array de números es: 1,2,3,4,5
console.log('El array de la suma es: ' + sum); // El array de la suma es: 15


const palabras = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye'];

let frecuenciaDePalabras = palabras.reduce((accumulator, currentValue) => {
  if(accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;

}, []);

console.log(frecuenciaDePalabras); // [ apple: 1, banana: 2, hello: 1, bye: 3 ]

// EJERCICIO: Crea un programa donde haya un array con calificaciones. Calcula el promedio de las calificaciones que son aprobatorias (mayores o iguales a 70).

const calificaciones = [50, 68, 75, 89, 43, 90, 70, 78, 39, 90, 78, 87, 50, 90, 68];

let calificacionesAprobatorias = calificaciones.filter(nota => nota >= 70);
console.log('Las calificaciones aprobatorias son: ' + calificacionesAprobatorias); // 75,89,90,70,78,90,78,87,90

let promedioCalificaiones = calificacionesAprobatorias.reduce((suma, nota) => suma + nota, 0) / calificacionesAprobatorias.length;


console.log('El promedio de las calificaciones aprobatorias es: ' + promedioCalificaiones); // 83