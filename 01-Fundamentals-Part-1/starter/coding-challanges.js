// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

/*
Coding challanges 1 & 2 
*/
// function BMI(mass, height) {
//   results = mass / height ** 2;
// }

// Mark1 = BMI(78, 1.69);
// John1 = BMI(92, 1.95);
// markHigherBMI = Mark1 > John1;
// if (markHigherBMI) console.log(`Mark's BMI is higher than John's!\n`);
// else console.log(`John's BMI is higher than Mark's!`);

// Mark2 = BMI(95, 1.88);
// John2 = BMI(85, 1.76);
// markHigherBMI = Mark2 > John2;
// if (markHigherBMI) console.log(`Mark's BMI is higher than John's!\n`);
// else console.log(`John's BMI is higher than Mark's!`);

/*
Coding challanges 3 


win if a team has a score greater than their opponents and 100 

compute average score to determine winner 

ab
*/

// function Avg(a, b, c) {
//   return (teamsAvg = (a + b + c) / 3);
// }

// Dolphins1 = Avg(96, 108, 89);
// Dolphins2 = Avg(97, 112, 101);
// Dolphins3 = Avg(97, 112, 101);

// Koalas1 = Avg(88, 91, 110);
// Koalas2 = Avg(109, 95, 123);
// Koalas3 = Avg(95, 109, 106);

// function winner(Dol, Koal) {
//   if (Dol >= 100 && Koal >= 100) {
//     if (Dol > Koal) {
//       console.log(`Dolphins has a higher average score of ${Dol}\n`);
//     } else if (Dol < Koal) {
//       console.log(`Koalas has higher average score of ${Koal}\n`);
//     } else {
//       console.log(`Tie occured both teams had an average score of ${Dol}\n`);
//     }
//   } else {
//     console.log(`Score not high enough, No winner\n`);
//   }
// }

// results1 = winner(Dolphins1, Koalas1);

// results2 = winner(Dolphins2, Koalas2);

// results3 = winner(Dolphins3, Koalas3);

/* 
Coding challange #4 

tip calc 

15% if value 50 -300
20% else 
*/

function calcTip(cost) {
  const tip = cost >= 50 && cost <= 300 ? 0.15 * cost : 0.2 * cost;
  console.log(
    `The bill was $${cost}, the tip was $${tip}, and the total value was $${
      tip + cost
    }`
  );
}

calcTip(275);
calcTip(40);
calcTip(430);
