// PRUEBA DE HACERLO CON html

const palabras = ["abeja", "canal", "fresa", "latir", "pesca", "viral", "traza", "tonto", "torno", "cazar", "sufro", "suero", "cuero", "tacha", "señas", "roble", "rozan", "punta", "plano", "playa", "naipe", "marte", "fisio", "falsa", "falda"]
console.log('La lista de palabras asciende a: ' + palabras.length);

let idPalabraOculta = Math.floor(Math.random()*palabras.length);
palabraOculta = palabras[idPalabraOculta];
console.log('La palaba oculta es: ' + palabraOculta);

//Array con las letras de la palabra oculta:
let letrasOcultas = palabraOculta.split('');
console.log("Las letras ocultas son: ", letrasOcultas);

let filas = [".fila-0", ".fila-1", ".fila-2", ".fila-3", ".fila-4"];

let filaActual = 0;

function compruebaFilaVacia(inputs) {
  console.log("Función compruebaFilaVacia. Estoy en la fila ", filaActual, " y los input son: ", inputs); // $('.fila-0')
  
let letraVacia = false;

  inputs.each(function(index){
    let letra = $(this).val();

    if(letra === "") {
      letraVacia = true;
      console.log("Hay una letra vacía ",index, letraVacia);
    } else {
      console.log("No hay letra vacía ", index, letraVacia);
    };
  });

  console.log("¿Hay alguna letra vacía?", letraVacia);
  return letraVacia;
};

function compruebaLetraCorrecta(inputs){
  console.log("Función compruebaLetraCorrecta. Estoy en la fila ", filaActual, " y los input son ", inputs);

  inputs.each(function(index) {
    let letra = $(this).val();
    console.log(index, ": ", letra);
  
    if (letra === letrasOcultas[index]) {
      console.log("Entra en verde")
      $(this).css('background-color', 'green');
    } else if (letrasOcultas.includes(letra)) {
      console.log("Entra en amarillo")
      $(this).css('background-color', 'yellow');
    } else {
      console.log("Entra en gris")
      $(this).css('background-color', 'grey');
    };
  });
};

function habilitaSiguienteFila(){
  console.log("Función habilitaSiguienteFila")
  $(filas[filaActual+1]).removeAttr('disabled');
};


$('#boton').click(function(){
  let inputsFilaActual = $(filas[filaActual]); // $('.fila-0')
  
  compruebaFilaVacia(inputsFilaActual);

  if(compruebaFilaVacia(inputsFilaActual) == false) {
    console.log("La fila está completa");
    compruebaLetraCorrecta(inputsFilaActual)
    habilitaSiguienteFila();
    filaActual++;
  } else {
    alert("Por favor, introduce una palabra")
  }
});