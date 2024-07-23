// splice(): cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

let vegetables = ['carrot', 'broccoli', 'spinach', 'tomato'];
let removeVegetables = vegetables.splice(2, 1, 'cucumber', 'onion'); // Desde la posición 2(incluida), elimina 1 elemento y, en su lugar, añade cucumber, onion.
console.log(vegetables); // [ 'carrot', 'broccoli', 'cucumber', 'onion', 'tomato' ]

// reverse(): invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.

let numbers = [1, 2, 3, 4, 5];
let reverseNumbers = numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// sort(): ordena los elementos de un array localmente y devuelve el array ordenado 
// con números: los convierte en string y los ordena de menor a mayor.
let unsortedNumbers1 = [4, 18, 1, 62, 34];
let sortedNumbers1 = unsortedNumbers1.sort();
console.log(unsortedNumbers1); // [ 1, 18, 34, 4, 62 ]

let unsortedNumbers2 = [4, 18, 1, 62, 34];
let sortedNumbers2 = unsortedNumbers2.sort((a, b) => a - b);
// 4 - 18 = -14 // 4 es menor que 18, no hace nada 
// 18 - 1 = 17 // 18 es mayor que 1, cambia la posición --> [4, 1, 18, 62, 34]
// 18 - 62 = -44 // 18 es menor que 62, no hace nada
// 62 - 34 = 28 // 62 es mayor que 34, cambia la posición --> [4, 1, 18, 34, 62]
// 4 - 1 = 3 // 4 es mayor que 1, cambia la posición --> [1, 4, 18, 34, 62]
// 4 - 18 = -14 // 4 es menor que 18, no hace nada
// 18 - 34 = -16 // 18 es menor que 34, no hace nada
// 34 - 62 = -28 // 34 es menor que 62, no hace nada. El array está ordenado de menor a mayor número.
console.log(sortedNumbers2); // [ 1, 4, 18, 34, 62 ]

// con strings: UTF-16, es decir, orden alfabético.
let cities = ['New York', 'Paris', 'Tokio', 'London'];
let sortedCities = cities.sort();
console.log(cities); // [ 'London', 'New York', 'Paris', 'Tokio' ]

// fill(): cambia todos los elementos en un array por un valor estático, desde el índice start (por defecto 0) hasta el índice end (por defecto array.lenght).

let ages = [21, 35, 45, 50];
let agesEmogi = ages.fill('😎', 1, 3); // Llena con emogi, desde la posición 1 (incluida) hasta la posición anterior a la 3.
console.log(ages); // [ 21, '😎', '😎', 50 ]

