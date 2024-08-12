// PRUEBA DE HACERLO CON html

//Array con las palabras a adivinar:
const palabras = ["abeja", "canal", "fresa", "latir", "pesca", "viral", "traza", "tonto", "torno", "cazar", "sufro", "suero", "cuero", "tacha", "señas", "roble", "rozan", "punta", "plano", "playa", "naipe", "marte", "fisio", "falsa", "falda"]
console.log('La lista de palabras asciende a: ' + palabras.length);

// Selecciona una palabra al azar:
let idPalabraOculta = Math.floor(Math.random()*palabras.length);
palabraOculta = palabras[idPalabraOculta];
console.log('La palaba oculta es: ' + palabraOculta);

//Array con las letras de la palabra oculta, para luego comprobar letra por letra:
let letrasOcultas = palabraOculta.split('');
console.log("Las letras ocultas son: ", letrasOcultas);

let filas = [".fila-0", ".fila-1", ".fila-2", ".fila-3", ".fila-4"];
let filaActual = 0;

// Función para comprobar si la fila está vacía:
function compruebaFilaVacia(inputs) {
  console.log("Función compruebaFilaVacia. Estoy en la fila ", filaActual, " y los input son: ", inputs); // $('.fila-0')
  
  let letraVacia = false;

  inputs.each(function(index){ // Va recorriendo uno a uno los inputs de html en la fila que corresponde.
    let letra = $(this).val(); // La letra es el valor del input que está recorriendo en ese momento (this).

    if(letra === "") { // Si no hay letra, cambia el valor de la variable.
      letraVacia = true;
      console.log("Hay una letra vacía ",index, letraVacia);
    } else { // Si sí que hay letra, deja la variable como está.
      console.log("No hay letra vacía ", index, letraVacia);
    };
  });

  console.log("¿Hay alguna letra vacía?", letraVacia);
  return letraVacia; // Devuelve el valor de la variable para luego hacer más cosas en la función click.
};

// Función que devuelve las letras introducidas por el usuario:
function letrasDelUsuario(inputs){
  let letras = [];
  inputs.each(function() { // Va recorriendo uno a uno los inputs de html en la fila que corresponde.
    let letra = $(this).val(); // La letra es el valor del input que está recorriendo en ese momento (this).
  console.log("Cada letra del usuario es: ", letra);
  letras = letras.concat(letra);
  });
  console.log("Las letras del usuario son: ", letras);
  return letras;
};


// Función para comprobar si alguna letra es correcta y colorearla del color que corresponda:
function compruebaLetraCorrecta(letras){
  console.log("Función compruebaLetraCorrecta. Estoy en la fila ", filaActual, " y las letras son ", letras, "Las letras ocultas son: ", letrasOcultas);
  
  for (let i = 0; i < letras.length; i++) {
    if (letras[i] === letrasOcultas[i]) { // Si la letra está bien posicionada en el mismo índice de letrasOcultas, colorea en verde.
      console.log("Entra en verde")
      $('#fila' + filaActual + '-columna' + i).css('background-color', 'green');
    } else if (letrasOcultas.includes(letras[i])) { // Si la letra está incluida en el array, pero no está bien posicionada, colorea en amarillo.
      console.log("Entra en amarillo")
      $('#fila' + filaActual + '-columna' + i).css('background-color', 'yellow');
    } else { // Si no se cumple ninguno de los anteriores casos, colorea en gris.
      console.log("Entra en gris")
      $('#fila' + filaActual + '-columna' + i).css('background-color', 'grey');
    };
  };
};

// Función que habilita la siguiente fila:
function habilitaSiguienteFila(){
  console.log("Función habilitaSiguienteFila")
  $(filas[filaActual+1]).removeAttr('disabled'); // Elimina el atributo "disabled" del array filas, en la posición fila actual + 1.
};


// Al hacer click en "enviar palabra":
$('#boton').click(function(){
  let inputsFilaActual = $(filas[filaActual]); // La primera vez devuelve: $(filas[0]) =  $('.fila-0')

  //Ejecuta la función compruebaFilaVacia con los inputs de html que están en la fila 0.

  if(compruebaFilaVacia(inputsFilaActual) == false) { // Si es falso que la fila esté vacía, es decir, la fila está completa, ejecuta las siguientes funciones:
    console.log("La fila está completa");
    let letrasEjcritas = letrasDelUsuario(inputsFilaActual); // la variable letrasDelUsuario es igual a las letras que me devuelve la función letrasDelUsuario.
    compruebaLetraCorrecta(letrasEjcritas); // Ejecuta la función compruebaLetraCorrecta con las letras que ha escrito el usuario.
    habilitaSiguienteFila();
    filaActual++; // Modifica la variable filaActual sumándole 1. Ahora filaActual vale 1.
  } else { // Si la función compruebaFilaVacia es verdad que está vacía, salta el alert.
    alert("Por favor, introduce una palabra")
  }
});