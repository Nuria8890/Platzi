// .find(): devuelve el VALOR del primer elemento del array que cumple la condición proporcionada.
const multiplosDe5 = [5, 10, 15, 20];
const primerNumeroMayorQue10 = multiplosDe5.find(numero => numero > 10);

console.log(primerNumeroMayorQue10); // 15

// .findIndex(): devuelve el INDICE del primer elemento del array que cumple la condición proporcionada en forma de función. Si no encuentra ningún elemento que cumpla la condición, devuelve -1.
const numerosAleatorios = [6, 14, 27, 56, 40];
const indiceDelNumero = numerosAleatorios.findIndex(numero => numero < 50);

console.log(indiceDelNumero); // 0 (el número 6)

// EJERCICIO: es un programa para verificar si hay alguna persona ganadora en la lista. Ingresa el número del ticket o el nombre de la persona para verificar si existe ganador, y muéstralo.

const participantes = [
  {id: 1, name: 'Jennifer', ticketNumber: 100},
  {id: 8, name: 'Michael', ticketNumber: 800},
  {id: 15, name: 'Emily', ticketNumber: 150},
  {id: 47, name: 'Charlie', ticketNumber: 470}
];

function encontrarNombreGanador (nombre) {
  let nombreGanador = participantes.find(persona => persona.name === nombre);
  if(nombreGanador === undefined){
    console.log('En la lista no existe ese nombre. Lo sentimos, no hay ganador');
  } else {
  console.log('El ganador es: ' + nombreGanador.name); // Michael
  };
};
encontrarNombreGanador('Michael');


function encontrarTicketGanador (ticket) {
  let ticketGanador = participantes.find(numero => numero.ticketNumber === ticket);
  if(ticketGanador === undefined){
    console.log('En la lista no existe ese número de ticket. Lo sentimos, no hay ganador');
  } else {
  console.log('El ganador es: ' + ticketGanador.name); // Emily
  };
};
encontrarTicketGanador(150);

// Cómo lo hace la profesora:

const winningParticipants = [
  {id: 1, name: 'Jennifer', ticketNumber: 100},
  {id: 8, name: 'Michael', ticketNumber: 800},
  {id: 15, name: 'Emily', ticketNumber: 150},
  {id: 47, name: 'Charlie', ticketNumber: 470}
];

function findWinnerByName (name) {
  const winner = winningParticipants.find(participants => participants.name === name);
  return winner || 'No winner found with that name.';
};

function findIndexWinnerByTicket (ticketNumber) {
  const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticketNumber);
  return index !== -1 ? index : 'No winner found with that ticket number.'
};

function displayWinnerInformation (winner) {
  if(winner !== undefined && winner !== null && winner !== 'No winner found with that ticket number.'){
    console.log('Winner information: ', winner);
  } else {
    console.log('No winner found');
  };
};

const winnerByName = findWinnerByName('Emily'); // { id: 15, name: 'Emily', ticketNumber: 150 }
const indexWinnerByTicket = findIndexWinnerByTicket(470); // 3

displayWinnerInformation(winnerByName);
console.log('Index of winner by ticket number: ', indexWinnerByTicket);
