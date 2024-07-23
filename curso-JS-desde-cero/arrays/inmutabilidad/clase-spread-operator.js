// 1. Copia de un array:
const originalArray = [1, 2, 3, 4, 5];
const copyOfArray = [...originalArray];
console.log(copyOfArray); // [1, 2, 3, 4, 5]

// 2. Combinar arrays:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinerArray = [...array1, ...array2];
console.log(combinerArray); // [ 1, 2, 3, 4, 5, 6 ]

// 3. Crear arrays con elementos adicionales:

const baseArray = [1, 2, 3];
const arrayWithAdditionalElements = [...baseArray, 4, 5, 6]
console.log(arrayWithAdditionalElements); // [ 1, 2, 3, 4, 5, 6 ]

// 4. Pasar parámetros a una función

function sum (a, b, c) {
  return a + b + c 
};

const numbers = [1, 2, 3];
const resut = sum(...numbers);
console.log(resut); // 6