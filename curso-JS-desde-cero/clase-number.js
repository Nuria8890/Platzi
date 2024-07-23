// 1. Entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

// 2. Notación científica
const cientifico = 5e3

// 3. Infinitos y Not a Number
const infinito = Infinity
const noEsUnNumero = NaN

//Operaciones aritméticas

// 1. Suma, resta, multiplicación y división
const suma = 3 + 4
const resta = 4 - 3
const multiplicacion = 4 * 3
const division = 16 / 2

// 2. Módulo y exponenciación
const modulo = 15 % 8 // Para saber si un número es múltiplo de otro
const exponenciacion = 2 ** 3 // Para saber la potencia

// Precisión
const resultado = 0.1 + 0.2
console.log(resultado) // Salen muchísimos decimales
console.log(resultado.toFixed(1)) // Indica cuántos decimales quiero que tenga el resultado
console.log(resultado === 0.3) // Comprueba si resultado es extrictamente igual (número y tipo) a 0.3

// Operaciones avanzadas
const raizCuadrada = Math.sqrt(16)
console.log(raizCuadrada)
const valorAbsoluto = Math.abs(-7)
console.log(valorAbsoluto)
const aleatorio = Math.random()
console.log(aleatorio)
