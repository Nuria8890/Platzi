// Social Media Profile

// 1. User information
const username = 'nuria.campo7'
const fullName = 'Nuria Campo'
const age = 33
const isStudent = true

// 2. Address
const address = {
  street: 'Lirio 8',
  city: 'Rivas',
  state: 'Madrid',
  zipCode: 28522
}

// 3. Hobbies
const hobbies = ['Puñetear', 'Escalar', 'Patinar']

// 4. Generating personalized bio
const personalizedBio = `Hola, soy ${fullName}.
Tengo ${age} años.
Vivo en ${address.city}.
Me encanta ${hobbies.join(', ')}.
Sígueme para más aventuras de código!`

// 5. Print the user profile and bio
console.log(personalizedBio)