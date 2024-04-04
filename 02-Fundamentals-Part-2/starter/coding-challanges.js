/* 
challange #1 
*/

// const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // winner if must have double the average score as other team, else no winner

// const checkWinner = (avgDolphins, avgKoalas) => {
//   avgDolphins >= avgKoalas * 2
//     ? console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})\n`)
//     : avgKoalas >= avgDolphins * 2
//     ? console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})\n`)
//     : console.log(`No Winner!`);
// };

// const dol1 = calcAvg(44, 23, 71);
// const dol2 = calcAvg(85, 54, 41);

// const kol1 = calcAvg(65, 54, 49);
// const kol2 = calcAvg(23, 34, 27);

// checkWinner(dol1, kol1);
// checkWinner(dol2, kol2);

/* 

Tip calculator 

15 % tip if bill is between 50 and 300 
else 20% 

*/

const tipCalc = (bill) => {
  return bill >= 50 && bill <= 300
    ? (console.log(
        `The bill was $${bill}, the tip was $${
          bill * 0.15
        }, and the total value $${bill + bill * 0.15}`
      ),
      [bill, bill * 0.15, bill + bill * 0.15])
    : (console.log(
        `The bill was $${bill}, the tip was $${
          bill * 0.2
        }, and the total value $${bill + bill * 0.2}`
      ),
      [bill, bill * 0.2, bill + bill * 0.2]);
};

let a = tipCalc(400);
console.log(a);

/* 
coding challange 4 add on 
*/

let billArr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let total = []; // i % 3 == 0
let valueHolder = [];
let tips = []; // i % 3 == 2

const avgTotal = (total) => {
  let sum = 0;
  for (let i = 0; i < total.length; i++) {
    sum += total[i];
  }
  return sum / total.length;
};

const filterCost = (billArr) => {
  for (let i = 0; i < billArr.length; i++) {
    valueHolder.push(tipCalc(billArr[i]));
  }
  console.log(valueHolder); // gives a 2d array of size 10 by 3

  for (let i = 0; i < valueHolder.length; i++) {
    for (let j = 0; j < 3; j++) {
      switch ((j + 1) % 3) {
        case 0:
          total.push(valueHolder[i][j]);

          break;
        case 2:
          tips.push(valueHolder[i][j]);

          break;
        default:
          break;
      }
    }
  }
  console.log(`This is tips : ${tips}`);
  console.log(`This is total : ${total}`);
  return avgTotal(total);
};

console.log(filterCost(billArr));

// /*

// Coding challange 3

// create an object for mark and john

// */

// class Person {
//   constructor(name, mass, height) {
//     this.name = name;
//     this.mass = mass;
//     this.height = height;
//   }

//   calcBMI() {
//     return this.mass / this.height ** 2;
//   }
// }

// const m = new Person("Mark Miller", 78, 1.69);
// const j = new Person("John Smith", 92, 1.95);

// const cond = () =>
//   m.calcBMI() > j.calcBMI()
//     ? [`${m.name}'s`, `${m.calcBMI()}`, `${j.name}'s`, `${j.calcBMI()}`]
//     : [`${j.name}'s`, `${j.calcBMI()}`, `${m.name}'s`, `${m.calcBMI()}`];

// let str = `${cond()[0]} BMI(${cond()[1]}) is higher than ${cond()[2]} (${
//   cond()[3]
// })!`;

// console.log(str);

/* 

*/
