//String primitivos
const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String('Soy un string primitivo también')
console.log(typeof stringPrimitivoTambien)

//String objeto
const stringObjeto = new String('Soy un string primitivo')
console.log(typeof stringObjeto)

//Acceder a caracteres
const saludo = 'Hola ¿Cómo estás?'
console.log(saludo[2]) // l
console.log(saludo.charAt(2)) // l
console.log(saludo.indexOf('o')) // 1
console.log(saludo.indexOf('Cómo')) // 6
console.log(saludo.indexOf('como')) // -1
console.log(saludo.lastIndexOf('o')) // 9
console.log(saludo.slice(3, 7)) // a ¿C
console.log(saludo.length) // 17
console.log(saludo.toLocaleUpperCase()) // HOLA ¿CÓMO ESTÁS?
console.log(saludo.toLocaleLowerCase()) // hola ¿cómo estás?

const saludoDividido = saludo.split(' ')
console.log(saludoDividido) // [ 'Hola', '¿Cómo', 'estás?' ]

const saludoConEspacios = ' Hola Mundo '
const saludoSinEspacios = saludoConEspacios.trim()
console.log(saludoSinEspacios) // Hola Mundo

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', 'gente')
console.log(nuevoSaludo) // Hola gente



