// JEST
// PROMESAS
// ASYNC AWAIT

// ES6

// const suma = (a, b) => {
//     a+b
// }

// function sum (a,b) {
//   return a + b;
// }
// console.log(sum(3,4));

const suma = (a, b) => {
  return a + b;
};

const resta = (a, b) => a - b;

const numberDelay = (number) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(number);
  }, 2000);
});

// numberDelay
//   .then((number) => {
//     console.log(number);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const customers = [{
  nombre: 'juan', apellido: 'donoso'
},{
  nombre: ''
}]


const getCustomersNames = () => customers.map((customer) => customer.nombre)

console.log(getCustomersNames());

module.exports = {
  suma,
  resta,
  numberDelay
};
