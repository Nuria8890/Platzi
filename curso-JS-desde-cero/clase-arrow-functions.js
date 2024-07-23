const greeting = function (name) {
  return `Hi, ${name}`
}
// Función flecha con retorno explicito
const newGreeting = (name) => {
  return `Hi, ${name}`
}

// Función flecha con retorno implícito
const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, ${name} ${lastName}`

// Lexical Binding

const functionalCharacter = {
  name: 'Uncle Ben',
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`)
  },

  messageWithArrowFunction: message => { 
    console.log(`${this.name} says: ${message}`)
  }
}

functionalCharacter.messageWithTraditionalFunction('With reat power comes great responsability.')
functionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.')