// Template literals

// const firstName = "Jack";
// const jonas = `I'm ${firstName}`;

// console.log(jonas);

// // Type Conversion and Coercion

// let a = "9" - "5";
// console.log(a); // 4
// let b = "19" - "13" + "17";
// console.log(b); // "617"
// let c = "19" - "13" + 17;
// console.log(c); // 23
// let d = "123" < 57;
// console.log(d); // false
// let e = 5 + 6 + "4" + 9 - 4 - 2;
// console.log(e); // "1149" -6 = 1143

// Equality

// const age = 18;

// // == does perfrom type coercion, however === does not.
// if (age === 18) console.log("You Just became an adult");

// const favourite = Number(prompt("what is your favorite number?"));

// console.log(favourite);

// if (favourite === 23) {
//   // '23' == 23
//   console.log("cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7");
// }

// if (favourite !== 23) {
//   console.log(`Why not 23?`);
// }

/* 
Switch statement 
*/
// const day = `monday`;

// switch (day) {
//   case `monday`:
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meet up`);
//   // break;

//   case `tuesday`:
//     console.log(`Prepare Theory videos`);
//     break;
//   case `wednessday`:
//   case `thursday `:
//     console.log(`Write code exampSles`);
//     break;
//   case `friday`:
//     console.log(`Record videos`);
//     break;
//   case `saturday`:
//   case `sunday`:
//     console.log(`Enjoy the weekend :D`);
//     break;

//   default:
//     console.log(`Not a valid day!`);
// }

/* 
The conditional operator (ternary)

*/

const age = 28;

age >= 18
  ? console.log(`I like to drink wine`)
  : console.log(`I like to drink water`);

const drink = age >= 18 ? `wine` : `water`;

console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = `wine`;
} else {
  drink2 = `water`;
}

console.log(drink2);

// with template literals

console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);
