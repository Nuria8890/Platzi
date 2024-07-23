/*
for in ---> objetos
Los objetos tienen propiedades, y las propiedades tienen un valor.

array, string
Los arrays o strings tienen items o elementos que generan una lista

for (variable in objeto) {
  código a ejecutar
}
*/

const listaDeCompras = {
  manzana: 5,
  peras: 3,
  naranjas: 2,
  uvas: 1
}

for (fruta in listaDeCompras) {
  console.log(fruta);
// manzana
// peras
// naranjas
// uvas
}

for (fruta in listaDeCompras) {
  console.log(`${fruta}: ${listaDeCompras[fruta]}`)
// manzana: 5
// peras: 3
// naranjas: 2
// uvas: 1
}