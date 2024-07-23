// Capacidades que tienen las funciones al igual que otros objetos

// 1. Callback: una función que se pasa como argumento

function a () {}
function b (a) {}
b(a)

// 2. Retornar funciones

function c () {
  function d () {}
  return d
}

// 3. Expresión de función: Asignar funciones a variables

const e = function() {}

// 4. Pueden tener propiedades y métodos

function f () {}
const obj = {}
f.call(obj)

// 5. Nested function: Anidar funciones

function g () {
  function h () {
    function i () {

    }
    i()
  }
  h()
}
g()

// 6. ¿Se pueden almacenar funciones en objetos?

const rocket = {
  name: 'Falcon 9',
  launchMessage: function launchMessage () {
    console.log('on fire!!!')
  }
}

rocket.launchMessage() // on fire!!!