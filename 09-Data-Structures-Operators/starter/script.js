'use strict';

const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sund'];
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// Delayed Departure from FAO to TXL (11h25)
//      Arival from BRU to FAO (11h45)
// Delayed Arrival from HEL to FAO (12h05)
//      Departure from FAO to LIS (12h30)

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = ` ${type.startsWith('_Delayed') ? '*' : ''} ${type.replaceAll(
    '_',
    ' '
  )} ${from.slice(0, 3).toUpperCase()} ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`.padStart(40);
  console.log(output);
}

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 ehanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, inc2, inc3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${inc2} and ${inc3}`
    );
  },

  // first parameter stored in mainIngredient
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient, otherIngredient);
  },
};

// Note destructuring/unpacking array
// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(x, y, z);

// let [first, second] = restaurant.categories;
// let [, , third] = restaurant.categories;
// console.log(first, second, third);

// //swaping values

// [first, second] = [second, first];

// console.log(first, second);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// const nested = [2, 4, [5, 6]];

// const [d, e, f] = nested;

// console.log(d, e, f);

// const [i, , [j, k]] = nested;

// console.log(i, j, k);

// Note Destructuring/unpacking objects

// const { name, openingHours, categories, fun } = restaurant;

// console.table(name, openingHours, categories);

// console.log(fun);

// // Note creates new variable names to refer to an objects properties
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // Deafualt values
// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// // Mutating variables

// let [a, b] = [111, 999];

// const obj = { a: 23, b: 7, c: 14 };
// console.log(a, b);
// ({ a, b } = obj);
// console.log(a, b);

// //Nested objects
// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// console.log(open, close);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // showcaseing default value for  mainIndex and time
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// Note spread Operator ...

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];

// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci']; // new array
// console.log(newMenu);

// // doesn't create new variables unlike deconstructing

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // joining arrays

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // works on all iterables (arrays,strings, maps, sets), but not objects

// const str = 'Jack';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// console.log(...str);

// // Note Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients); // uses each element

// // Objects and spread operator
// const newResturant = {
//   ...restaurant,
//   founder: 'Jack',
// };

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristornante Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

//Note Rest Pattern and Paramters (opposite of spread) pack elements into array

// destructuring

// const arr = [1, 2, ...[3, 4]];

// // REST syntax, On left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];

// console.log(a, b, others); // others is becomes an array of the unselected values

// //REST must be last element in array
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // functions

// // when you have an arbitrary amount of parameters use REST pattern/parameters
// // numbers is an array with elements equal to the values passed and a length equal to the number of parameters
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);

// const x = [23, 5, 7];

// add(...x); // unpack values

// restaurant.orderPizza('Mushrooms', 'onion', 'Olives', 'spinach');

// Note Short Circuiting ( && andd || )

// use,return and shrot circuit Any data type.
// if first operand is truethy with a OR operator, second opperand doesn't get evaluated
// console.log(`_____OR______`);
// console.log(3 || 'Jack');
// console.log('' || 'Jack');
// console.log(true || 0);
// console.log(undefined || null);

// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// const guest3 = restaurant.numGuests2 || 10;
// console.log(guest3);

// console.log(`_____AND______`);

// // ex
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// //equivalnet
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Note Logical Assignment Operators

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Mario',
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // equivalent
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// //nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Note for each item
// for (const item of menu) console.log(item);

// for (const item of menu.entries()) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i}:${el}`);
// }

// console.log([...menu.entries()]);

// Note optional chaining

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // with opitional chanining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sund'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // array
// const users = [{ name: 'Jack', email: 'hi@gmail.com' }];

// console.log(users[0]?.name ?? 'User array empty');

// // equivalnet
// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');

//Note Object; keys, value, enteries

// // property Names
// const properties = Object.keys(openingHours); // creates array of key's
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property Values
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// Note Sets

// no index's
// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pizza']);

// console.log(ordersSet);

// console.log(ordersSet.size);

// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('bread'));
// ordersSet.delete('Risotto');
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // example
// const staff = ['waiter', 'Chef', 'waiter', 'manager', 'Chef', 'waiter'];

// const staffUnique = [...new Set(staff)];

// console.log(staffUnique);

// Note Maps
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// console.log(rest);

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open!')
//   .set(false, 'We are closed');

// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);

// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Test');

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

// console.log(rest.get(arr));

// Note Maps iteration

// const question = new Map([
//   ['question', 'What is the best programming language in the worl?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try again'],
// ]);

// console.log(question);

// // convert object to map
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

// // iteration
// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));

// console.log(question.get(answer === question.get('correct')));
// // equivalent
// // answer === question.get('correct')
// //   ? console.log(question.get(true))
// //   : console.log(question.get(false));

// // convert map to array

// console.log([...question]);

//Note Working with Strings

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

// extracts str (including,excluding)
console.log(airline.slice(4));

console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got Lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passenger[0].toUpperCase() + passengerLower.slice(1, passenger.length);
console.log(passengerCorrect);

// Comparing emails

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const normalEmail = loginEmail.toLowerCase().trim();

console.log(normalEmail, normalEmail === email);

// replaceing
const priceUS = '$288.97';
const priceGB = priceUS.replace('.', ',');
console.log(priceGB);

const announcement =
  'All passengers come to barding door 23.  Boarding door 23!';

// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// practice exereciese

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('Knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('Ihave a laptop, some Food and a pocket Knife');
checkBaggage('Sock and camera');
checkBaggage('Got some snacks and a gun for protection');

// Note split and join for strings
console.log('a+very+nice+string'.split('+'));
console.log('Jack Hendry.'.split(' '));

const [firstName, lastName] = 'Jack Hendry'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

console.log(newName);

// const capitalizeName = function (name) {
//   let tmp = name.split(' ');
//   const namesUpper = [];
//   for (const n of tmp) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// };
// capitalizeName('jessica ann smith davis ');
// capitalizeName('jack hendry ');

// Note padding string
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Jack'.padStart(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4331234132412341232));
console.log(maskCreditCard('433123413241234123434'));

//repeat

const message2 = 'Bad weather ... All Departueres Delayed... ';
console.log(message2.repeat(5));
