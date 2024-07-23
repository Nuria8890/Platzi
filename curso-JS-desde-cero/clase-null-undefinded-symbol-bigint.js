// Null
const snoopy = null
console.log(snoopy) // null
console.log(typeof null) // objet

// Undefined
let name
console.log(name) // Undefined: no se le ha asignado ningún valor

// Symbol
const uniqueId = Symbol('id')
const symbol1 = Symbol('1')
const symbol2 = Symbol('1')
console.log(symbol1 === symbol2) // False. Compara el valor y el tipo, no son iguales porque el id es único, así que aunque tengan el mismo valor, son diferentes...

const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user)

// BigInt
const bigNumber = 23432434543579874986325764n
console.log(bigNumber)

const numberIfParticlesInTheUniverse = 100000000000000000n
console.log(numberIfParticlesInTheUniverse)