/*
let persona = {
  nombre: 'Diego',
  apellido: 'De Granda',
  edad: 35
};
*/

// Función constructora: si quisiera crear 150 objetos persona, se haría con esta función.

function Persona(nombre, apellido, edad) {
  this.name = nombre;
  this.lastName = apellido;
  this.age = edad;
};

// Generamos instancias de este objeto Persona:
const persona1 = new Persona('Juan', 'Perez', 20);
console.log('persona 1 es: ', persona1); // Persona { name: 'Juan', lastName: 'Perez', age: 20 }

const persona2 = new Persona('Diego', 'De Granda', 35);
console.log('persona 2 es: ', persona2); // persona 2 es:  Persona { name: 'Diego', lastName: 'De Granda', age: 35 }


// Para agregar una propiedad nueva a las instancias:
persona1.nacionalidad = 'Mexicano';
console.log('Añado la propiedad nacionalidad a persona 1, y persona 1 es: ', persona1);
/*
Añado la propiedad nacionalidad a persona 1, y persona 1 es::  Persona {
  name: 'Juan',
  lastName: 'Perez',
  age: 20,
  nacionalidad: 'Mexicano'
}
*/

console.log('Añado la propiedad nacionalidad a persona 1, y persona 2 es: ', persona2); // Persona { name: 'Diego', lastName: 'De Granda', age: 35 }



// Para agregar un método nuevo al objeto Persona, para que esa propiedad esté en todas las instancias:

Persona.prototype.saludar = function () {
  return `Hola, me llamo ${this.name} ${this.lastName} `
}
console.log(persona1.saludar()); // Hola, me llamo Juan Perez 
console.log(persona2.saludar()); // Hola, me llamo Diego De Granda 