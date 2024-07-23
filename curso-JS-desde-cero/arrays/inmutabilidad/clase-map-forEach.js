//.map(): nos permite aplicar una función a cada uno de los elementos del array, y construir un nuevo array con el resultado.

const numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * 2);

console.log(squaredNumbers); // [ 2, 4, 6, 8, 10 ]

//.forEach(): Itera sobre cada elemento del array y ejecuta una función proporcionada para cada elemento, sin crear un nuevo array.

const colors = ['red', 'pink', 'blue'];
let iteratedColors = colors.forEach(color => console.log(color));
//red
//pink
//blue


// EJERCICIO: Convertir grados fahrenheit en celsius usando la siguiente fórmula: C = 5/9 * (F-32)

const gradosFahrenheit = [32, 68, 95, 104];
let gradosCelsius = gradosFahrenheit.map(grado => 5/9 * (grado-32));
console.log('La temperatura en grados celsius es: ' + gradosCelsius); // La temperatura en grados celsius es: 0,20,35,40


// EJERCICIO: Sumar los elementos de un array: Crea un programa que coja los números de un array y calcula la suma de todos los elementos de ese array.
const numeros = [2, 4, 6, 8, 10];
let sumaDeNumeros = 0;

numeros.forEach(numero => {
  sumaDeNumeros = sumaDeNumeros + numero // sumaDeNumeros += numero
});
console.log('La suma de los números es: ' + sumaDeNumeros); // La suma de los números es: 30