//Paso por valor - Datos primitivos
let x = 1
let y = 'hola'
let z = null

let a = x
let b = y
let c = z

console.log(x, y, z, a, b, c)

a = 12
b = 'Platzi'
c = undefined

console.log(x, y, z, a, b, c)

// Paso por referencia - Datos complejos
let frutas = ['manzana']
let copiaDeFrutas = frutas
// Si modifico frutas o modifico copiaDeFrutas cambiará la variable principal frutas, ya que ambos hacen referencia al mismo hueco en la memoria.
copiaDeFrutas.push('pera')
frutas.push('melón')
console.log(frutas, copiaDeFrutas)

let ropa = {
  blusa: '👚'
}
ropa.pantalon = '👖'
console.log(ropa)