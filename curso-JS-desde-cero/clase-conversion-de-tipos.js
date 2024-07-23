//Explicity Type Casting

const string = '42'
const integer = parseInt(string) // convierte la cadena de texto en un número entero
console.log(integer)
console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal) // convierte la cadena de texto en un número flotante
console.log(float)
console.log(typeof float)

const stringBinary = '1010'
const decimal = parseInt(stringBinary, 2) // Convierte de binario a decmal
console.log(decimal)
console.log(typeof decimal)

//Implicity Type Casting

const sum = '5' + 3
console.log(sum) // 53

const sumWithBoolean = '3' + true
console.log(sumWithBoolean) // 3true

const sumWithNumber = 2 + true
console.log(sumWithNumber) // 3

const stringValue = '10'
const numberValue = 10
const booleanValue = true
// Si hay string CONCATENA, si no hay string SUMA
console.log(stringValue + stringValue) // 1010
console.log(stringValue + numberValue) // 1010
console.log(stringValue + booleanValue) // 10true
console.log(numberValue + stringValue) // 1010
console.log(numberValue + numberValue) // 20
console.log(numberValue + booleanValue) // 11
console.log(booleanValue + stringValue) // true10
console.log(booleanValue + numberValue) // 11
console.log(booleanValue + booleanValue) // 2