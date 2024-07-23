// .includes(): determina si un array incluye un determinado elemento.

const numeros = [1, 2, 3, 4, 5];

const resultado1 = numeros.includes(3);
console.log(resultado1); // true

const resultado2 = numeros.includes(8);
console.log(resultado2); // false

// indexOf(): devuelve el PRIMER índice en el que se puede encontrar un elemento dado en el array, o retorna -1 si el elemento no está.

const frutas = ['manzana', 'uvas', 'cereza', 'mango', 'cereza'];

const index1 = frutas.indexOf('cereza');
console.log(index1); // 2

const index2 = frutas.indexOf('pera');
console.log(index2); // -1

// lastInexOf(): devuelve el ÚLTIMO índice en el que se puede encontrar un elemento dado en el array, o retorna -1 si el elemento no está.

const index3 = frutas.lastIndexOf('cereza');
console.log(index3); // 4

const index4 = frutas.lastIndexOf('pera');
console.log('Index4 es: ', index4); // -1


// EJERCICIO: dado un array de string y un string suelto, escribe una función que determine si el string suelto está presente en el array. De ser así, devuelve el índice de la primera posición y el índice de la última posición; si no está presente, devuelve -1.

const stringArray = ['apple', 'banana', 'orange', 'grape', 'banana', 'kiwi'];
const target = 'banana';

function encuentraElIndiceEnElArray(stringArray, target){
  if (stringArray.includes(target)){
    const firstIndex = stringArray.indexOf(target);
    const lastIndex = stringArray.lastIndexOf(target);
    return {
      primerIndice: firstIndex,
      ultimoIndice: lastIndex
    }
  }
  return {
    primerIndice: -1,
    ultimoIndice: -1
  };
};

console.log('Los índices son: ', encuentraElIndiceEnElArray(stringArray, target)); // Los índices son:  { primerIndice: 1, ultimoIndice: 4 }



// Otra chica lo hace así:

const pokemones = ['pikachu', 'pikachu', 'charmander', 'bulbasaur', 'squirtle','charmander', 'cyndaquil', 'charmander', 'magikarp', 'raichu']
const targets = 'charmander'


function findMyPokemonIndex (pokemones, targets){
    return {
        targetInArray: pokemones.includes(targets),
        firstOcurrence: pokemones.indexOf(targets),
        lastOcurrence: pokemones.lastIndexOf(targets)
    }
}
console.log(findMyPokemonIndex(pokemones, targets)) // { targetInArray: true, firstOcurrence: 2, lastOcurrence: 7 }