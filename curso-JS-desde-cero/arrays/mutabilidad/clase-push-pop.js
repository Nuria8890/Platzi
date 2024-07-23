// push(): añade uno o más elementos al final de un array y devuelve la nueva longitud del array

// pop(): elimina el último elemento de un array y devuelve ese elemento eliminado.

// Métodos que modifican el array original (Mutabilidad)

const countries = ['USA', 'Canada', 'UK'];
const newCountries = countries.push('Germany', 'Australia');
console.log(countries); //[ 'USA', 'Canada', 'UK', 'Germany', 'Australia' ]
console.log(newCountries); // 5


const removedCountry = countries.pop();

console.log(countries); // [ 'USA', 'Canada', 'UK', 'Germany' ]
console.log(removedCountry); // Australia