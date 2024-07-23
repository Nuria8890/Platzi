// Enlace implícito o implicit binding

const house = { //objeto
  dogName: 'Firulais',
  dogGreeting: function () {// Función dentro del objeto
    console.log(`Hi, I'm ${this.dogName}`)//Con this accedo al objeto, y ya puedo acceder a la propiedades del objeto.
  } 
}
house.dogGreeting() // Llamo a la función que está dentro del objeto house


// Enlace explícito o explicit binding

const newHouse = { // Objeto
  dogName: 'Coconut',
}

function dogGreeting () { // Función fuera del objeto
  console.log(`Hi, I'm ${this.dogName}`)
}


dogGreeting.call(newHouse) // Llamo a la función, y con .call vinculo esta función al objeto (newHouse) para poder acceder a sus propiedades




function newDogGreeting (owner, address) {
  console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)
}
const owner = 'Lucy'
const address = 'Avenue 123'
newDogGreeting.call(newHouse, owner, address) // Puedo vincular una función con un objeto y a la vez mandarle diferentes parámetros