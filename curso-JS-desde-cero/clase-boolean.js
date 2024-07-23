const isActive = true
const hasPermission = false

//  Conversión implícita: directamente lo convierte js
const result = 5 > 3
console.log(result) // true

const name = 'Platzi'
console.log(!!name) // true

// Conversión explícita: lo convertimos nosotros
const value = 0
const explicitBoolean = Boolean(value)
console.log(explicitBoolean) // False
const otherValue = -24
const otherExplicitBoolean = Boolean(otherValue)
console.log(otherExplicitBoolean)