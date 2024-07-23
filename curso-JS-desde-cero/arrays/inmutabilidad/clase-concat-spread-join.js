// Cómo unir y entrelazar los elementos de dos o más arrays.

// .concat(): une dos o más arrays devolviendo un único array:
const codigoMorse1 = ['....', '---']; // H O
const codigoMorse2 = ['.-..', '.-']; // L A

  // Forma nº1
  const mensajeMorseForma1 = codigoMorse1.concat(codigoMorse2);
  console.log(mensajeMorseForma1); // [ '....', '---', '.-..', '.-' ]

  // Forma nº2
  const mensajeMorseForma2 = [].concat(codigoMorse1, codigoMorse2);
  console.log(mensajeMorseForma2); // [ '....', '---', '.-..', '.-' ]



// Operador spread
  //Forma nº1
  function combinarMasMensajes (array1, array2) {
    console.log([...array1, ...array2]); // [ '....', '---', '.-..', '.-' ]
  };
  combinarMasMensajes(codigoMorse1, codigoMorse2);


  //Forma nº2
  const numeros = [1, 2, 3];
  const strings = 'string';

  combinarMasMensajes(numeros, strings);
  // [
  //   1,   2,   3,   's',
  //   't', 'r', 'i', 'n',
  //   'g'
  // ]

// .join(): junta todos los elementos de un array, y nos devuelve un solo valor.
const mensajeMorseString = mensajeMorseForma1.join('');
console.log(mensajeMorseString); //....---.-...-
