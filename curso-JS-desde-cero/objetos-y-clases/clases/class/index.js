  // Una clase es un molde para poder crear otros objetos. Es como una función constructora.

  class Persona {
    constructor(nombre, edad) {
      this.name = nombre;
      this.age = edad;
    }
    saludar() {
      return `Hola, me llamo ${this.name}, y tengo ${this.age} años`;
    }
  };

  const persona1 = new Persona('Mariana', 25);

  console.log('El saludo de persona1 es: ', persona1.saludar()); // El saludo de persona1 es:  Hola, me llamo Mariana, y tengo 25 años