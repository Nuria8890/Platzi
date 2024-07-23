// .every(): determina si TODOS los elementos en el array cumplen la condición.
const edades = [21, 25, 31, 19, 22];

const todosSonAdultos = edades.every(edad => edad > 18);
console.log(todosSonAdultos); // true



// .some(): determina si, AL MENOS UN ELEMENTO, cumple la condición.

const algunoEsMayorDe30 = edades.some(edad => edad > 30);
console.log(algunoEsMayorDe30);