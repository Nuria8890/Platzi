// Shift(): Elimina el primer elemento de un array, y nos devuelve ese elemento que hemos eliminado
const colors = ['yellow', 'blue', 'red'];
console.log(colors); // [ 'yellow', 'blue', 'red' ]
const removedColors = colors.shift();
console.log(colors); // [ 'blue', 'red' ]
console.log(removedColors);//yellow

// Unshift(): Agrega uno o más elementos al principio del array, y nos devuelve el tamaño en el que queda el array.

const newColors = colors.unshift('pink', 'purple');
console.log(colors); // [ 'pink', 'purple', 'blue', 'red' ]
console.log(newColors); // 4