// La propiedad 'prototipo' solo existe en funciones de objetos, es decir, solo existe en clases o en funciones constructoras.
// Cuando generemos los métodos o las propiedades del objeto, el prototipo lo que va a hacer es heredar los mismos métodos y propiedades que tenemos en el objeto.

class Animal {
  constructor(nombre, tipo) {
    this.name = nombre;
    this.type = tipo;
  }
  emitirSonido(){
    return 'El animal emite un sonido'
  }
}

class Perro extends Animal { // La clase Perro va a extender de la clase Animal
  constructor(nombre, tipo, raza) {
    super(nombre, tipo); // Llama al constructor de la clase Animal, y utiliza el nombre y el tipo en la clase que se está extendiendo, que es Perro.
    this.breed = raza;
  }
  ladrar(){
    return 'guau, guau'
  }
  correr(){
    return `El perro ${this.name} corre alegremente`
  }
}

const perro1 =  new Perro ('Firulais', 'perro', 'doberman');
console.log('El perro1 es: ', perro1); // Perro { name: 'Firulais', type: 'perro', breed: 'doberman' }
console.log('El perro1 emite sonido: ', perro1.emitirSonido()); // El perro1 emite sonido:  El animal emite un sonido
console.log('El perro1 ladra así: ', perro1.ladrar()); // El perro1 ladra así:  guau, guau
console.log('El perro1 corre: ', perro1.correr()); // El perro1 corre:  El perro Firulais corre alegremente


// Generar un nuevo método en una instancia:

perro1.nuevoMetodo = function() {
  return 'Este es un nuevo método'
}

console.log('El nuevo método creado en perro1 es: ', perro1.nuevoMetodo()); // El nuevo método creado en perro1 es:  Este es un nuevo método

// Cadena de prototipo: Generar un nuevo método a la clase constructora:

Animal.prototype.segundoMetodo = function() {
  return 'Este es el segundo método creado dentro de la función constructora'
}
console.log('El segundo método es: ', perro1.segundoMetodo()); // El segundo método es:  Este es el segundo método creado dentro de la función constructora Animal