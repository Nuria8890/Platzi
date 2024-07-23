// Operadores de comparación

1 == '1' // Compara si un valor es igual a otro (true)
2 === '2' // Compara si, tanto el valor como el tipo de dato, es extrictamente igual (el primer dígito es number y el segundo es string, esta condición es false)

3 != '3' // Compara si un valor es diferente a otro. Es una negación. (3 no es igual a 3, esta condición es false)
3 !== '3' // Compara si, tanto el valor como el tipo de dato, es extrictamente diferente (el primer dígito es number y el segundo string, esta condición es true)

4 > 5 // false
5 < 6 // true
7 >= 8 // false
8 <= 9 // true


const a = 10;
const b = 20;
const c = "10";

a == b; // false
a === c; // false
a == c; // true
a != b; // true
a !== c; // true
a > b; // false
a <= b; // true
a > c; // false