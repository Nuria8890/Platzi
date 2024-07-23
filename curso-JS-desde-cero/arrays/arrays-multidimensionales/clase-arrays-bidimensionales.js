let array1D = [1, 2, 3] // Array unidimensional (3 columnas, 1 fila)

let array2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] // Array bidimensional (3 columnas, 3 filas)

// Los arrays bidimensionales también se puede escribir de la siguiente manera:
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// Para cambiar un valor a la matriz, hay que indicar en qué fila y qué columna está el valor que queremos modificar:
matriz[1][2] = 10; // Cambiamos el 6 (que se encuentra en la fila 1, columna 2) por un 10
console.log(matriz); // [ [ 1, 2, 3 ], [ 4, 5, 10 ], [ 7, 8, 9 ] ]

//Para saber cuál es el índice de un valor:
let value = matriz[0][1];
console.log('El valor colocado en la fila 0 columna 1 es: ', value); // 2


// Operaciones más comunes con arrays bidimensionales

  //Recorrer un array bidimensional:
  for (let i = 0; i < matriz.length; i++) { // Entra en las filas. ([F0], [F1], [F2])
    for (let j = 0; j < matriz[i].length; j++) { // Entra en las columnas ([C0, C1, C2], [C0, C1, C2], [C0, C1, C2])
    console.log('Array recorrido: ', matriz[i][j]);
    }
  };

  // Buscar elementos específicos:
  function findElement (array, elemento) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if(array[i][j] === elemento){
          return true
        }
      }
    }
    return false
  };
  const elementoABujcar = 5;
  let varFindElement= findElement(matriz, elementoABujcar);
  console.log('¿En el array ', matriz , ' existe el número ', elementoABujcar, '?: ',  varFindElement);


  //Duplicar los valores de una matriz
  function duplicateMatriz (array) {
    let newMatriz = [];
    for (let i = 0; i < array.length; i++) {
      newMatriz[i] = [...array[i]]
    }
    return newMatriz
  }

  console.log('El valor de la nueva matriz es: ', duplicateMatriz(matriz));