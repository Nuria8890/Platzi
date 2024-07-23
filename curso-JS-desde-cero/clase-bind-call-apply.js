// Call
const owner = 'Maca'
const address = '567 Avenue'

function dogGreeting (owner, address) {
  console.log(`Hi, I'm ${this.dogName}, and I live with ${owner} on ${address}`)
}

const newHouse = {
  dogName: 'Sheldom'
}

dogGreeting.call(newHouse, owner, address)

// Apply: si tenemos muchos parámetros, lo mejor es usar apply, porque se añaden todos esos parámetros en a un array, y usamos el array como parámetro de la función.
const necessaryValues = [owner, address]
dogGreeting.apply(newHouse, necessaryValues)

// Bind: me devuelve una función, y para poder ver el resultado tengo que ejecutar esa función
const bindingWithBind = dogGreeting.bind(newHouse, owner, address)
bindingWithBind()