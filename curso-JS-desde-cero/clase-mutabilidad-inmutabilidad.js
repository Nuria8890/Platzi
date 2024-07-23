// Tipo de dato primitivo - Inmutable: no cambia el dato original, lo que hace es crear un nuevo dato
let numero = 23
numero = numero + 10
console.log(numero)

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

// Tipo de dato complejo - Mutable: se modifica el valor original
let usuario = {nombre: 'Pepito', edad: 15}
usuario.edad = 20
console.log(usuario)

let frutas = ['manzanas', 'peras']
frutas[0] = 'sandia'
console.log(frutas)

let persona = {nombre: 'Antonio'}
function cambiarNombre (objeto) {
  objeto.nombre = 'Lucas'
}

cambiarNombre (persona)
console.log(persona)