"use strict";

function checkDogs(dogsJulia, dogsKate) {
  dogsJulia = dogsJulia.splice(1, 2);

  console.log(dogsJulia);

  let allDogs = [...dogsJulia, ...dogsKate];

  allDogs.forEach(function (curr, i, arr) {
    console.log(
      `Dog number ${i} is an ${
        curr >= 3 ? "adult" : "puppy"
      }, and is ${curr} years old`
    );
  });
}

const julia1 = [3, 5, 2, 12, 7];
const julia2 = [9, 16, 6, 8, 3];
const kate1 = [4, 1, 15, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

// julia1 reassigned

// checkDogs(julia1, kate1);
// checkDogs(julia2, kate2);

const test1 = [5, 2, 4, 1, 15, 8, 3];
const test2 = [16, 6, 10, 5, 6, 1, 4];

function calcAverageHumanAge(ages) {
  const age2Humans = ages.map((val) => {
    if (val <= 2) {
      return 2 * val;
    } else {
      return 16 + val * 4;
    }
  });
  console.log(age2Humans);

  const filteredDogs = age2Humans.filter((val) => val >= 18);
  console.log(filteredDogs);

  const avgHumanAge = filteredDogs.reduce((acc, cur) => {
    return acc + cur / filteredDogs.length;
  }, 0);
  console.log(avgHumanAge);
}

calcAverageHumanAge(test1);
calcAverageHumanAge(test2);

const arrCalcAverageHumanAge = (ages) => {
  return ages
    .map((val) => {
      return val <= 2 ? 2 * val : 16 + val * 4;
    })
    .filter((val) => val >= 18)
    .reduce((acc, cur, i, arr) => {
      return acc + cur / arr.length;
    }, 0);
};

console.log(arrCalcAverageHumanAge(test1));
console.log(arrCalcAverageHumanAge(test2));
