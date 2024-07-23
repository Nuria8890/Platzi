// Array: conjunto de elementos que se crean dentro de una variable. Es un objeto, por lo que puede tener diferentes métodos y, dependiendo del método, puede ser mutable o inmutable.

// ¿Cómo crear un array?

// 1. new Array() o Array()

const fruits = Array('apple', 'bannana', 'orange');
console.log(fruits); // [ 'apple', 'bannana', 'orange' ]

const justOneNumber = Array(12);
console.log(justOneNumber); // [ <12 empty items> ]

const numbers = Array(1, 2, 3, 4, 5);
console.log(numbers); // [ 1, 2, 3, 4, 5 ]

// 2. Array literal syntax

const oneNumber = [4];
console.log(oneNumber); // [ 4 ]

const emptyArray = [];
console.log(emptyArray); // [] Sirve por ejemplo para cuando queremos inicializar algún programa.

const sports = ['soccer', 'tennis', 'rugby'];
console.log(sports); // [ 'soccer', 'tennis', 'rugby' ]

const recipeIngredients = [
  'Flour',
  true,
  2,
  {
    ingredient: 'Milk', quantity: '1 cup'
  },
  false
]
console.log(recipeIngredients); // [ 'Flour', true, 2, { ingredient: 'Milk', quantity: '1 cup' }, false ]

// Accessing array elements

const firstFruit = fruits[0];
console.log(firstFruit); // apple

// Tamaño del array

const numberOfFruits = fruits.length;
console.log(numberOfFruits); // 3


// Mutability

fruits.push('watermelon');
console.log(fruits); // [ 'apple', 'bannana', 'orange', 'watermelon' ] --> Array mmodificado


// Inmutability

const newFruits = fruits.concat(['grape', 'kiwi']);
console.log(fruits); //  [ 'apple', 'bannana', 'orange', 'watermelon' ] --> Array SIN modificar (solo con la modificación que hemos hecho con el método push)
console.log(newFruits); // [ 'apple', 'bannana', 'orange', 'watermelon', 'grape', 'kiwi' ] --> suma de dos arrays, fruits + newFruits.

// Comprobar si un array es un array

const isArray = Array.isArray(fruits);
console.log(isArray); // true

// Ejercicio práctico: suma todos los elementos de un array.

const numbersArray = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i]; // recorre el array y va sumando sus elementos.
}
console.log(sum); // 15 --> 1+2+3+4+5=15

