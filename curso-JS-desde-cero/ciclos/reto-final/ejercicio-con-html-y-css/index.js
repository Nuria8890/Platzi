// PRUEBA DE HACERLO CON html

const palabras = ["abeja", "canal", "fresa", "latir", "pesca", "viral", "traza", "tonto", "torno", "cazar", "sufro", "suero", "cuero", "tacha", "señas", "roble", "rozan", "punta", "plano", "playa", "naipe", "marte", "fisio", "falsa", "falda"]
console.log('La lista de palabras asciende a: ' + palabras.length);

let idPalabraOculta = Math.floor(Math.random()*palabras.length);
palabraOculta = palabras[idPalabraOculta];
console.log('La palaba oculta es: ' + palabraOculta);

//Array con las letras de la palabra oculta:
let letrasOcultas = palabraOculta.split('');
console.log("Las letras ocultas son: ", letrasOcultas);

$(':input').keyup(function(){
    $(this).parent().next().children().focus();
})

$('#boton').click(function(){
  console.log('Has pulsado en "enviar palabra"');
  
  let filas = [".fila-1", ".fila-2", ".fila-3", ".fila-4", ".fila-5"];
  
  filas.forEach((fila)=> {
    $(fila).each(function(index) {
      let letra = $(this).val();

      console.log(index + ': ' + $(this).val()); // Pinta el valor de los inputs con un índice.

      if (letra === "") {
        console.log("entra por aqui")
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
});




if (palabraDelUsuario == palabraOculta) {
  alert("Enhorabuena!! Has adivinado la palabra oculta 😎");
} else {
  alert(`Oooohhh has perdido!!! La palabra era ${palabraOculta}. Inténtalo de nuevo 😉`);
}