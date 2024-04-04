'use strict';

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5 way
//   //   numPassengers ||= 1;
//   //   price ||= 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

// Note Passing arguments works: Value vs Reference

// const flight = 'LH234';
// const jack = {
//   name: 'Jack Hendry',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, jack);
// console.log(flight);
// console.log(jack);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(jack);
// checkIn(flight, jack);

// Note functions accepting callback functions

// removes spaces and makes string lowercase
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const uppFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original String ${str}`);
//   console.log(`Transformed String ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best', uppFirstWord);
// transformer('JavaScript is the best', oneWord);

// const high5 = function () {
//   console.log('hi5');
// };
// // add event listner would be a higher order function then high5
// document.body.addEventListener('click', high5);

// ['jack', 'timmy', 'adam'].forEach(high5);

// Note functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');

// greeterHey('Jack');
// greeterHey('Tim');

// greet('Hello')('Jonas');

// // same as above with arrow functions
// const great1 = greeting => name => console.log(`${greeting} ${name}`);

// great1('hi')('Jimmy');
// const greeterHi = great1('Hi');

// greeterHi('BOB');

// Note the call and apply methods
const airEurope = {
  airline: 'airEurope',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

airEurope.book(239, 'Jack Hendry');
airEurope.book(291, 'Mike Smith');

const flyEurope = {
  airline: 'flyEurope',
  iataCode: 'EW',
  bookings: [],
};

//call method
const book = airEurope.book;
book.call(flyEurope, 23, 'Sarah Williy');
console.log(flyEurope);

book.call(airEurope, 239, 'Mary Cooper');
console.log(airEurope);

const swissAir = {
  airline: 'swissAir',
  iataCode: 'LX',
  bookings: [],
};

book.call(swissAir, 987, 'Timmy Turner');
console.log(swissAir);

// apply Mehtod

const flightData = [583, 'George Cooper'];
book.apply(swissAir, flightData);
console.log(swissAir);

book.call(swissAir, ...flightData);

// Bind method
const bookAE = book.bind(airEurope);
bookAE(23, 'Timmy burner');

const bookEW23 = book.bind(airEurope, 23);
bookEW23('Jack Hendry');
bookEW23('Jimmy Jones');

// with EVent listeners
airEurope.planes = 300;
airEurope.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// airEurope.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', airEurope.buyPlane.bind(airEurope));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

// challange

const attempt = function (value) {
  return function (rate) {
    return value + value * rate;
  };
};

console.log(attempt(23)(0.23));
console.log(attempt(23)(0.23));
