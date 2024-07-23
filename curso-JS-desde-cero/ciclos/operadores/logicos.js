// Operadores lógicos

a && b // Si valor a Y valor b se cumplen, entonces devuelve true
a || b // Si valor a O valor b se cumplen, entonces devuelve true
! // Negación. Lo que hace es cambiar true por false, y false por true 

const a = 10;
const b = 20;
const c = "10";

a == b && a === c; //false
a == b || a == c; // true
a != b || a === c; // true
!(a === c) // true