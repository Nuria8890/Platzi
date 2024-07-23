/*
for (variable; condición; incremento) {
  código a ejecutar
}
1. Evalúa la condición teniendo en cuenta la variable inicial // true
2. Ejecuta el código
3. Incrementa el valor de la variable

4. Evalúa la condición teniendo en cuenta la variable incrementada en el bucle anterior// true
5. Ejecuta el código
6. Incrementa el valor de la variable

7. Evalúa la condición teniendo en cuenta la variable incrementada en el bucle anterior // false
8. Fin

Una vez que se evalúe la condición se ejecuta el código, después la variable se incrementa. Se inicia una segunda vuelta y la variable vale más (porque se ha incrementado antes), vuelve a evaluar la condición, ejecuta el código e incrementa la variable... así sucesivamente hasta que la condición se evalue y sea false, entonces el código deja de ejecutarse.
*/

let list = ["eat", "sleep", "code", "repeat"];

for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
// eat
// sleep
// code
// repeat
}