// 'use strict';

// const Person = function (firstName, birthYear) {
//   console.log(this);
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never create fn inside constructor
//   // this.calcAge = function() {
//   //      console.log(2037 - this.birthYear);

//   // }
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('jack', 1975);
// console.log(jack, matilda);

// console.log(jonas instanceof Person);

// Person.hey = function () {
//   console.log('Hey there *wave*');
//   console.log(this);
// };

// // jonas.hey();

// const jay = 'Jay';
// console.log(jay instanceof Person);

// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // Think of protype property as .prototypeOfLinkedObjects property

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas, matilda);

// console.log(jonas.hasOwnProperty('species'));

// //Object.prototype (top of Prototype chain )
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 2, 3, 5, 3, 5]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');

// console.dir(x => x + 1);

// /*
// Challange #1

// */

// const Car = function (makeOfCar, speedOfCar) {
//   this.makeOfCar = makeOfCar;
//   this.speedOfCar = speedOfCar; // speed in km/h
// };

// // adding
// Car.prototype.accelerate = function () {
//   this.speedOfCar = this.speedOfCar + 10;
//   console.log(
//     `The ${this.makeOfCar} has accelerated and it's current speed is ${this.speedOfCar}`
//   );
// };

// Car.prototype.brake = function () {
//   this.speedOfCar = this.speedOfCar - 5;
//   console.log(
//     `The ${this.makeOfCar} has braked and it's current speed is ${this.speedOfCar}`
//   );
// };

// const Merc = new Car('Merc', 120);
// const BMW = new Car('BMW', 95);

// Merc.brake();
// Merc.brake();

// BMW.accelerate();
// BMW.accelerate();

// // class expression
// // const PersonCl = class {

// // }

// //class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exist
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey there *wave*');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);

// PersonCl.hey();

// jessica.calcAge();

// /*   1. Classes are NOT hoisted
//      2. Classes are first-class citizens
//      3. Classes are executed in strict mode
// */

// const walter = new PersonCl('Walter White', 1965);

// const account = {
//   owner: 'jonas',
//   movement: [200, 530, 120, 300],

//   get latest() {
//     return this.movement.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movement.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movement);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);

// steven.name = 'Steven';
// steven.birthYear = 2002;

// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);

// sarah.init('Sarah', 1979);
// sarah.calcAge();

// /* Challenge #2

// */

// class newCar {
//   constructor(makeOfCar, speedOfCar) {
//     this.makeOfCar = makeOfCar;
//     this.speedOfCar = speedOfCar;
//   }

//   accelerate() {
//     this.speedOfCar = this.speedOfCar + 10;
//     console.log(
//       `The ${this.makeOfCar} has accelerated and it's current speed is ${this.speedOfCar}`
//     );
//   }

//   brake() {
//     this.speedOfCar = this.speedOfCar - 5;
//     console.log(
//       `The ${this.makeOfCar} has braked and it's current speed is ${this.speedOfCar}`
//     );
//   }

//   get speedUS() {
//     // console.log(`Speed of Car in Mph ${this.speedOfCar/1.6}`);

//     return this.speedOfCar / 1.6;
//   }

//   set speedUS(speedOfCar) {
//     console.log(
//       `Converted car speed from km/h to mph ${this.speedOfCar * 1.6}`
//     );
//     this.speedOfCar = this.speedOfCar * 1.6;
//   }
// }

// const test = new newCar('Ford', 120);

// test.accelerate();

// test.speedUS;
// test.speedUS = 81.25;

// const Person3 = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person3.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person3.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking Prototypes
// Student.prototype = Object.create(Person3.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'CS');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);

// // Coding chanllenge 3

// const Car2 = function (makeOfCar, speedOfCar) {
//   this.makeOfCar = makeOfCar;
//   this.speedOfCar = speedOfCar; // speed in km/h
// };

// // adding
// Car2.prototype.accelerate = function () {
//   this.speedOfCar = this.speedOfCar + 10;
//   console.log(
//     `The ${this.makeOfCar} has accelerated and it's current speed is ${this.speedOfCar}`
//   );
// };

// Car2.prototype.brake = function () {
//   this.speedOfCar = this.speedOfCar - 5;
//   console.log(
//     `The ${this.makeOfCar} has braked and it's current speed is ${this.speedOfCar}`
//   );
// };

// const EVCar = function(makeOfCar,speedOfCar,batteryCharge) {
//      Car2.call(this, makeOfCar,speedOfCar);
//      this.batteryCharge = batteryCharge;
// }

// EVCar.prototype = Object.create(Car2.prototype);

// EVCar.prototype.chargeBattery = function(chargeTo){
//      this.batteryCharge = chargeTo;
//      console.log(`The battery's charge is now ${this.batteryCharge}`);
// }

// EVCar.prototype.accelerate = function () {
//   this.speedOfCar = this.speedOfCar + 20;
//   this.batteryCharge--;
//   console.log(
//     `The ${this.makeOfCar} has accelerated and it's current speed is ${this.speedOfCar}, with a charge of ${this.batteryCharge}`
//   );
// };

// const tesla = new EVCar('Tesla',120,23);

// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there *wave*');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'CS');
martha.introduce();
// const martha = new StudentCl('Martha Jones', 2012, 'CS')

martha.calcAge();

// Inheritance Between "Classes": Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (fullName, birthYear, course) {
  PersonProto.init.call(this, fullName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'CS');
jay.introduce();
jay.calcAge();

// Public/Private fields
// Public/Private methods

class Account {
  // Public fields (instances)
  local = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // this._movements = []; // Protected property
    // this.locale = navigator.language;
    console.log(`THanks for opening an account ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }
  //public interface of objects
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// console.log(acc1.#movements);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

// Chaining

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(acc1.getMovements());

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speedOfCar = this.speedOfCar + 10;
    console.log(
      `The ${this.makeOfCar} has accelerated and it's current speed is ${this.speedOfCar}`
    );
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is goign at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }


}

class EVCar extends CarCl {
  #charge;
  makeOfCar;
  speedOfCar;

  constructor(makeOfCar,speedOfCar,charge){
    super(makeOfCar,speedOfCar);
    this.#charge = charge;
  }
chargeBattery(chargeTo){
     this.#charge= chargeTo;
     console.log(`The battery's charge is now ${this.#charge}`);
     return this;
}

accelerate() {
  this.speedOfCar = this.speedOfCar + 20;
  this.#charge--;
  console.log(
    `The ${this.make} has accelerated and it's current speed is ${this.speed}, with a charge of ${this.#charge}`
  );
  return this;
};

}

// Coding Chanllenge #4



const tesla = new EVCar('Rivian',120,23);

tesla.accelerate().accelerate().chargeBattery(80);

console.log(tesla);
tesla.brake();
tesla.accelerate();
