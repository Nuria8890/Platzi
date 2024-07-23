// Crea una lista de transaciones financieras para realizar varias operaciones con ella:
const transacciones = [
  {
    id: 1,
    descripcion: 'Mercadona',
    total: -67,
  },
  {
    id: 2,
    descripcion: 'Nómina',
    total: 1500,
  },
  {
    id: 3,
    descripcion: 'Alquiler',
    total: -500,
  },
  {
    id: 4,
    descripcion: 'Compra on line',
    total: -250,
  },
  {
    id: 5,
    descripcion: 'Devolución compra',
    total: 36,
  }
]
// 1. Calcula el saldo total utilizando .reduce():
function calculaSaldoTotal(){
  const saldoTotal = transacciones.reduce((acumulador, importe) => acumulador + importe.total, 0);
  return saldoTotal;
};
calculaSaldoTotal()
console.log('El saldo total es: ', calculaSaldoTotal()); // El saldo total es:  719

  // La profesora lo hace así:
  const totalBalance = transacciones.reduce((acc, transaction) => acc + transaction.total, 0);
  console.log('TotalBalance: ', totalBalance); // TotalBalance:  719



// 2. Encuentra la transacción más elevada utilizando el método .reduce(), ya sea, ese importe, un ingreso o un gasto:
function encuentraTransaccionMasElevada(){
  const transaccionMasElevada = transacciones.reduce((importeGuardado, importe) => 
    {
      if (Math.abs(importeGuardado.total) > Math.abs(importe.total)){
        return importeGuardado;
      } else {
        return importe;
      }
    }, 0);
  return transaccionMasElevada;
};
encuentraTransaccionMasElevada()
console.log('La transacción más elevada es: ', encuentraTransaccionMasElevada()); //La transacción más elevada es:  { id: 2, descripcion: 'Nómina', total: 1500 }
  // La profesora lo hace así:
  const largestTransaction = transacciones.reduce((maxTransaction, transaction) => {
    return Math.abs(transaction.total) > Math.abs(maxTransaction.total) ? transaction : maxTransaction
  }, transacciones[0]);
  console.log('Largest transaction: ', largestTransaction); // Largest transaction:  { id: 2, descripcion: 'Nómina', total: 1500 }



// 3. Utiliza el método .filter() para obtener las transaciones efectuadas por compra.

let transaccionesPorCompra = transacciones.filter(importe => importe.total < 0);
console.log('Las transacciones efectuadas por compras son: ', transaccionesPorCompra);
// Las transacciones efectuadas por compras son:  [
//   { id: 1, descripcion: 'Mercadona', total: -67 },
//   { id: 3, descripcion: 'Alquiler', total: -500 },
//   { id: 4, descripcion: 'Compra on line', total: -250 }
// ]


// 4. Ecuentra una transacción por descripción utilizando el método .find():
function encuentraTransaccionPorDescripcion(descripcion){
  return transaccionPorDescripcion = transacciones.find(movimiento => movimiento.descripcion === descripcion);
};
encuentraTransaccionPorDescripcion('Compra on line');
console.log('La transacción descrita es: ', encuentraTransaccionPorDescripcion('Compra on line')); // La transacción descrita es:  { id: 4, descripcion: 'Compra on line', total: -250 }

  // La profesora lo hace así:
  const specificTransaction = transacciones.find(transaction => transaction.descripcion === 'Compra on line');
  console.log('Specific Transaction: ', specificTransaction); // Specific Transaction:  { id: 4, descripcion: 'Compra on line', total: -250 }



// 5. Encuentra el índice de una transacción por importe utilizando .findIndex():
let IndiceDeTransaccionPorImporte = transacciones.findIndex(movimiento => movimiento.total === -250);
console.log('El índice por importe -250 es: ', IndiceDeTransaccionPorImporte); // El índice por importe -250 es: 3



// 6. Actualiza las descripciones de las transaciones utilizando .forEach().
transacciones.forEach(movimiento => {
  if (movimiento.total < 0) {
    movimiento.descripcion = `Gasto:  ${movimiento.descripcion}`;
  } else {
    movimiento.descripcion = `Ingreso:  ${movimiento.descripcion}`;
  }
});
console.log('Transacciones actualizadas: ', transacciones);
// Transacciones actualizadas:  [
//   { id: 1, descripcion: 'Gasto:  Mercadona', total: -67 },
//   { id: 2, descripcion: 'Ingreso:  Nómina', total: 1500 },
//   { id: 3, descripcion: 'Gasto:  Alquiler', total: -500 },
//   { id: 4, descripcion: 'Gasto:  Compra on line', total: -250 },
//   { id: 5, descripcion: 'Ingreso:  Devolución compra', total: 36 }
// ]