'use strict';

// const game = {
//   team1: 'Bayern Munch',
//   team2: 'Borrussia Dortmud',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   Scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   // prints who scored goals and total goals scored
//   printGoals: function (...names) {
//     console.log(`Players that scored: ${names}\n`);
//     console.log(`${names.length} goals were scored`);
//   },
// };

// // assigns frist array in game.players to player1 and the second to players2
// const [players1, players2] = [...game.players];

// // assigns first element in players1 array to gk variable, the rest of the elemetns get assigned to fieledPlayers as an array
// const [gk, ...fieldPlayers] = [...players1];

// console.log(gk);
// console.log(fieldPlayers);

// const allPlayers = [...players1, ...players2]; // creates a single array of all players

// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']; // assigns array of players on team 1 and adds 3 new players
// console.log(players1Final);

// // assigns the odds for the outcome of each game
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
// console.log(team1, draw, team2);

// game.printGoals(...game.Scored);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// console.log('______________Challenge#2______________');

// for (const [goalNumb, playerName] of Object.entries(game.Scored)) {
//   console.log(`${goalNumb}: scored by ${playerName}`);
// }

// let sum = 0;
// for (const odd of Object.values(game.odds)) {
//   sum = +odd;
// }

// console.log(`The average odd: ${sum / 3}`);

// console.log(`Odd of Vicotry for ${game.team1}: ${game.odds.team1}
// Odd of draw: ${game.odds.x}
// Odd of Victory for ${game.team2}: ${game.odds.team2}`);

// const count = {};
// for (const name of game.Scored) {
//   if (count[name]) {
//     count[name] += 1;
//   } else {
//     count[name] = 1;
//   }
// }

// console.log(count);

// CODING Challange 3
// const gameEvents = new Map([
//   [17, 'GOAL'],
//   [36, 'Substitution'],
//   [47, 'GOAL'],
//   [61, 'Substitution'],
//   [64, 'Yellow Card'],
//   [69, 'Red Card'],
//   [70, 'Substitution'],
//   [72, 'Substituion'],
//   [76, 'GOAL'],
//   [80, 'GOAL'],
//   [92, 'Yellow Card'],
// ]);
// // 1
// const events = [...new Set(gameEvents.values())];
// //2
// gameEvents.delete(64);
// console.log(gameEvents);

// //3
// let include = 0;

// console.log(gameEvents.keys());

// let minutes = gameEvents.keys();

// for (const item of minutes) {
//   console.log(item);
//   if (item <= 90) {
//     include++;
//   }
// }
// console.log(include);
// console.log(`An event happend, on average, every ${90 / include}`);

// // 4
// let respPt1 = a => (a ? `[FIRST` : `[SECOND`);

// const respPt2 = (min, ev) => `HALF] ${min}: ${ev}`;

// for (const [min, ev] of gameEvents) {
//   min < 45
//     ? console.log(`${respPt1(1)} ${respPt2(min, ev)}`)
//     : console.log(`${respPt1(0)} ${respPt2(min, ev)}`);
// }

/*

Challange 4 

*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textAreaEl = document.querySelector('textarea');
const buttonEl = document.querySelector('button');

buttonEl.textContent = 'click me';

// get it working for 1 input
buttonEl.addEventListener('click', function () {
  let str = textAreaEl.value;
  console.log(str);

  let seperate = str.split('\n');
  console.log(seperate);
  let indi = [];

  for (const ini of seperate) {
    const [first, second] = ini.trim().toLowerCase().split('_');
    const op = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(op.padEnd(20));
  }
});
