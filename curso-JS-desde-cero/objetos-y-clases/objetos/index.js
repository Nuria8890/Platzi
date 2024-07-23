/*
Los objetos son una estructura de datos que me ayuda a guardar valores de una forma particular (key / value)

objeto {
  propiedad1 : valor1,
  propiedad2 : valor2,
  propiedad3: valor3
  .
  .
  .
  métodos: funciones que están dentro del objeto que nos ayudan a generar interacción
  }
*/

const persona = {
  nombre: 'John',
  edad: 30,
  direccion: {
    calle: 'Av Insurgente 187',
    ciudad: 'CDMX'
  },
  saludar() {
    return `Hola, mi nombre es ${persona.nombre}`
  }
};
console.log('Creo el objeto persona: ', persona);
/*
Creo el objeto persona: {
  nombre: 'John',
  edad: 30,
  direccion: { calle: 'Av Insurgente 187', ciudad: 'CDMX' },
  saludar: [Function: saludar]
}
*/

console.log('La función saludar dice: ', persona.saludar()); // La función saludar dice: Hola, mi nombre es John

// Para añadir una nueva propiedad, se hace así:
persona.telefono = '555-555-5555';

console.log('Añado al objeto persona la propiedad teléfono: ', persona);
/*
Añado al objeto persona la propiedad teléfono: {
  nombre: 'John',
  edad: 30,
  direccion: { calle: 'Av Insurgente 187', ciudad: 'CDMX' },
  saludar: [Function: saludar],
  telefono: '555-555-5555'
}
*/

// Para añadir un nuevo método al objeto, se hace así:
persona.despedir = () => {
  return 'Adiós, me voy'
};

console.log('La función despedir dice: ', persona.despedir()); // La función despedir dice:  Adiós, me voy

// Para acceder a la propiedad de un objeto que está dentro de otro objeto:
console.log('La calle es: ', persona.direccion.calle); // La calle es:  Av Insurgente 187

// Para eliminar una propiedad o un método que ya existe:
delete persona.telefono;
console.log('He eliminado el teléfono: ', persona);
/*
He eliminado el teléfono: {
  nombre: 'John',
  edad: 30,
  direccion: { calle: 'Av Insurgente 187', ciudad: 'CDMX' },
  saludar: [Function: saludar],
  despedir: [Function (anonymous)]
}
*/

delete persona.despedir;
console.log('He eliminado el método despedir: ', persona);
/*
He eliminado el método despedir:  {
  nombre: 'John',
  edad: 30,
  direccion: { calle: 'Av Insurgente 187', ciudad: 'CDMX' },
  saludar: [Function: saludar]
}
*/