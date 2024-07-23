// .slice(): crea una copia superficial (shallow copy) de una porción del array, especificada por índices de inicio (incluido) y fin (no incluido).

const animales = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log('El array animales es: ', animales)

const unParametro = animales.slice(2); // del índice 2 (incluido) en adelante.
console.log('Utilizando solo un parámetro (2): ', unParametro); //  [ 'camel', 'duck', 'elephant' ]

const dosParametros = animales.slice(2, 4) // del indice 2(incluido) hasta el 4(sin incluir), es decir, hasta el 4-1
console.log('Utilizando dos parámetros (2, 4): ', dosParametros); // [ 'camel', 'duck' ]

const dosUltimos = animales.slice(-2) // cuenta desde el final del array
console.log('Utilizando valores negativos(-2): ', dosUltimos); // [ 'duck', 'elephant' ]

const unParametroPositvioYUnoNegativo = animales.slice(1, -2); // del indice 1(incluido) hasta el -2(sin incluir), es decir, hasta el -2-1
console.log('Utilizando un parámetro positivo y otro negativo (1, -2): ', unParametroPositvioYUnoNegativo); // [ 'bison', 'camel' ]

