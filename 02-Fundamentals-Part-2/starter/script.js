/* 
STRICT MODE 
*/

"use strict";

// avoids bugs; forbids actions and shows errors

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log(`I can drive :D`);

// const interface = "Audio"; // gives bug
// const private = 564; // gives bug

// Arrow Function

const calcAge3 = (birthYear) => 2037 - birthYear;

// let a = calcAge3(2000);
// console.log(a);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge3(birthYear);
//   const retirement = 65 - age;
//   //return retirement;
//   return `${firstName} retires in ${retirement} years
//   `;
// };

// console.log(yearsUntilRetirement(1999, "jack"));

// const firstName = "Jack";

// const coolCars = ["vet", "cobra", "gtr"];
// const jack = ["Jack", "Hendry", 2037 - 1999, "student", coolCars];

// console.log(jack);

/* 
OBJECTS 
*/
// has five properties
// const me = {
//   firstName: "Jack",
//   lastName: "Hendry",
//   age: 23,
//   job: "front-end developer",
//   friends: ["andre", "liam", "cam", "zack"],
// };

// const nameKey = "Name";

// // console.log(me["first" + nameKey]);
// // console.log(me["last" + nameKey]);

// const bio = prompt(
//   `What do you want to know about Jack? Choose between fristName, lastName, age, job, and friends.`
// );

// console.log(me);
// console.log(me[bio]);

// if (me[bio]) console.log(me[bio]);
// else console.log(`Wrong request`);

// // adding

// me.location = `Canada`;
// me[`sport`] = `Muay Thai`;
// console.log(me);

// // challange

// console.log(
//   `${me.firstName} has ${me.friends.length} friends, and his best friends are ${me.friends[0]} & ${me.friends[1]}`
// );

/* 
Object methods 

*/

const me = {
  firstName: "Jack",
  lastName: "Hendry",
  job: "front-end developer",
  friends: ["andre", "liam", "cam", "zack"],
  birthYear: 1999,
  hasDriversLicense: true,

  calcAge3: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

// console.log(me.calcAge3());

// console.log(me.age);
// console.log(me.age);
// console.log(me.age);

const challange1 = `${me.firstName} is a ${me.calcAge3()}-year old ${
  me.job
}, and he has ${me.hasDriversLicense ? `a` : `no`} driver's license `;

console.log(challange1);
