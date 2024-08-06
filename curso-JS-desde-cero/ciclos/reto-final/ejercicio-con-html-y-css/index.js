// PRUEBA DE HACERLO CON html

const palabras = ["abeja", "canal", "fresa", "latir", "pesca", "viral", "traza", "tonto", "torno", "cazar", "sufro", "suero", "cuero", "tacha", "señas", "roble", "rozan", "punta", "plano", "playa", "naipe", "marte", "fisio", "falsa", "falda"]
console.log('La lista de palabras asciende a: ' + palabras.length);

let idPalabraOculta = Math.floor(Math.random()*palabras.length);
palabraOculta = palabras[idPalabraOculta];
console.log('La palaba oculta es: ' + palabraOculta);

//Array con las letras de la palabra oculta:
let letrasOcultas = palabraOculta.split('');
console.log("Las letras ocultas son: ", letrasOcultas);

________________________________________________________________


// Pasa de un input al siguiente cuando levanto el dedo de la tecla
$(':input').keyup(function(){
    $(this).parent().next().children().focus();
    // de donte estoy (this, que es el input), busca a mi padre (label), pasa al hermano (next, que es el siguienet label), entra en él y busca a su hijo (children, que es el input), y accede a él para poder escribir (focus)
});



$('#boton').click(function(){
  console.log('Has pulsado en "enviar palabra"');

  let filas = [".fila-0", ".fila-1", ".fila-2", ".fila-3", ".fila-4"];

  filas.forEach((fila)=> { // $fila = '.fila-0'

    $(fila).each(function(index) { // $('.fila-0').each ... -> cada input

      let letra = $(this).val();

      console.log(index + ': ' + $(this).val()); // Pinta el valor de los inputs con un índice.

      if (letra === "") {
        console.log("letra está vacío")
        // alert("Por favor, escribe una palabra");
      } else if (letra == letrasOcultas[index]) { // Si letra está en letrasOcultas[índice de letra], ejecuta el código.
        console.log("entra en verde",$(this));
        $(this).css('background-color', 'green');
      } else if (letrasOcultas.includes(letra)) { // Si en letrasOcultas está incluida letra, ejecuta el código.
        console.log("entra en amarillo",$(this));
        $(this).css('background-color', 'yellow');
      } else {
        console.log("entra en gris",$(this));
        $(this).css('background-color', 'grey');
      }
    }
    );
  });

  // Habilitar siguiente fila
  for (let i = 1; i < filas.length; i++) {
    console.log("entra en remove")
    console.log(filas[i-1])
    if (filas[i-1] !== "") {

      $(filas[i]).removeAttr('disabled');
      console.log($(filas[i-1]))
    } 
    console.log("salgo")
    break
  }


  // filas.forEach ((fila)=> {
  //   console.log("entra en remove")
  //   if (fila !== "") {
  //     $(fila+1).removeAttr('disabled');
  //   }
  // })

  // if (palabraDelUsuario == palabraOculta) {
  //   alert("Enhorabuena!! Has adivinado la palabra oculta 😎");
  // } else {
  //   alert(`Oooohhh has perdido!!! La palabra era ${palabraOculta}. Inténtalo de nuevo 😉`);
  // }
});


