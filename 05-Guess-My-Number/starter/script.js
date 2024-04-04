'use strict';

// /*
// Note
//  how to select HTML element
//  . before the class name
// */
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// // Note to change text value of element
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // Note .value used for input field
// document.querySelector('.guess').value = 23;

/*
Note event Listener 

addEventListener( trigger, actionTaken)
*/

// const secretNum = Math.trunc(Math.random() * 20) + 1; //  random number 1 to 20

// let score = 20;
// let highScore = 0;

// const displayMsg = function (message) {
//   document.querySelector('.message').textContent = message;
// };
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   // no input
//   if (score > 0) {
//     if (!guess) {
//       displayMsg('No Number!');
//       // when player wins
//     } else if (guess === secretNum) {
//       displayMsg('Correct Number!');
//       document.querySelector('.number').textContent = secretNum;
//       document.querySelector('body').style.backgroundColor = '#60b347';
//       document.querySelector('.number').style.width = '30rem';

//       if (score > highScore) {
//         highScore = score;
//         document.querySelector('.highscore').textContent = highScore;
//       }

//       // when player's guess is to high
//     }
//     // when guess is wrong
//     else if (guess !== secretNum) {
//       displayMsg(
//         guess > secretNumber ? 'Guess is to high!' : 'Guess is to low!'
//       );
//       score--;
//       document.querySelector('.score').textContent = score;
//     }
//     // Note eliminated dry code
//     //else if (guess > secretNum) {
//     //   score--;
//     //   document.querySelector('.message').textContent = 'Guess is to high!';
//     //   document.querySelector('.score').textContent = score;
//     //   // when player's guess is to low
//     // } else if (guess < secretNum) {
//     //   score--;
//     //   document.querySelector('.message').textContent = 'Guess is to low!';
//     //   document.querySelector('.score').textContent = score;
//     // }
//     // when play takes more than 20 guesses
//   } else {
//     displayMsg('You lose the Game!');
//     document.querySelector('.score').textContent = 0;
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   // 2)
//   const secretNum = Math.trunc(Math.random() * 20) + 1;
//   score = 20;

//   document.querySelector('.guess').value = '#222';
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.score').textContent = score;

//   document.querySelector('.number').textContent = '?';

//   document.querySelector('.body').style.backgroundColor = '#';

//   document.querySelector('.number').style.width = '15rem';
// });

/* 
todo 

1) Have a randomly generated number to compare input 

2) be able to select user input 

3) when check is clicked the user input is compared to the random number 

4) actions for guessing ... 


*/

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
let highScore = document.querySelector('.highscore');
let scoreEl = document.querySelector('.score');
let msgEl = document.querySelector('.message');

let guessedNumber;
let currentScore = 20;
let randomNumber = Number(Math.trunc(Math.random() * 20) + 1);

document.querySelector('.number').textContent = randomNumber; // Note comment to hide number

const reset = () => {
  document.querySelector('.guess').value = '';
  randomNumber = Number(Math.trunc(Math.random() * 20) + 1);
  currentScore = 20;
  scoreEl.textContent = currentScore;
  document.querySelector('.number').textContent = randomNumber; // Note comment to hide number
};

btnCheck.addEventListener('click', function () {
  if (currentScore > 0) {
    guessedNumber = Number(document.querySelector('.guess').value);
    if (!guessedNumber) msgEl.textContent = 'No Number!';
    else if (randomNumber === guessedNumber) {
      msgEl.textContent = 'You Win! ';
      highScore.textContent =
        currentScore > highScore.textContent
          ? currentScore
          : highScore.textContent;
    } else {
      msgEl.textContent = `Guess to ${
        guessedNumber > randomNumber ? 'high' : 'low'
      }!`;
      currentScore--;
      scoreEl.textContent = currentScore;
    }
  } else {
    msgEl.textContent = 'You Lose!';
    reset();
  }
});

btnAgain.addEventListener('click', function () {
  reset();
});
