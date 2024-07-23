// Creación de string
const primeraOpcion = 'Comillas simples'
const segundaOpcion = "Comillas dobles"
const terceraOpcion = `Comillas ladeadas`

// Concatenación: Opción +
const direccion = 'Calle falsa 123'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi dirección completa es ' + direccion + ' ' + ciudad
console.log(direccionCompleta)

// Concatenación: Template Literals
const nombre = 'Nuria'
const pais = '🇪🇸'
const presentacion = `Hola, me llamo ${nombre}, y soy de ${pais}`
console.log(presentacion) 

// Concatenación: join()
const primeraParte = 'Me encanta'
const segundaParte = 'la gente de '
const terceraParte = '🇨🇵'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' '))

// Concatenación: concat()
const hobbie1 = 'patinar'
const hobbie2 = 'puñetear'
const hobbie3 = 'viajar'
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ' y ', hobbie3, '.')
console.log(hobbies)

// 1. Escape alternativo
const escapeAlternativo = "I'm software engineer"
// 2. Barra invertida
const escapeBarraInvertida = 'I\'m software engineer'
// 3. Template literals
const escapeComillaInvertida = `I'm software engineer`

// Escritura de string largos
/*
Las rosas son rojas,
las violetas son azules,
caracter inesperado,
en la línea 86.
*/
const poema1 = 'Poema 1\n' +
              'Las rosas son rojas,\n' +
              'las violetas son azules,\n' +
              'caracter inesperado,\n' +
              'en la línea 86.'
console.log(poema1)

const poema2 = 'Poema 2\n\
Las rosas son rojas,\n\
las violetas son azules,\n\
caracter inesperado,\n\
en la línea 86.'
console.log(poema2)

const poema3 = `Poema 3 
Las rosas son rojas,
las violetas son azules,
caracter inesperado,
en la línea 86.`
console.log(poema3)