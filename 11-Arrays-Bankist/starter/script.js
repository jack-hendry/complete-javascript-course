'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  // .textContent = 0;
  movements.forEach(function (cur, i) {
    const type = cur > 0 ? 'deposit' : 'withdrawal';

    const html = ` 
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${cur}</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};

const user = 'Steven Thomas Williams'; // stw

const calcDisplaySummary = function (acc) {
  const inflow = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${inflow} EUR`;

  const outflow = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, val) => acc + val, 0);
  labelSumOut.textContent = `${Math.abs(outflow)} EUR`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest} EUR`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(val => val[0])
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);

const updateUI = function (currentAccount) {
  // DIsplay movements
  displayMovements(currentAccount.movements);
  // Display balance
  calcDisplayBalance(currentAccount);
  // Display summary
  calcDisplaySummary(currentAccount);
};

//Event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin == Number(inputLoginPin.value)) {
    // Display UI and Welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Clear Input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    reciverAcc &&
    currentAccount.balance >= amount &&
    reciverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete accoun
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Note Methods
// let arr = ['a', 'b', 'c', 'd', 'e'];

// // slice
// console.log(arr.slice(2, 4));

// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// // splice changes original arr
// // console.log(arr.splice(2));

// console.log(arr.splice(-1));
// console.log(arr);

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // concat

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));

// // Note NEw method

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));
// // getting last arry element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: you deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('\n');

// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: you deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// currencies.forEach(function (curVal, key, map) {
//   console.log(`${key}: ${curVal} `);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// console.log(currenciesUnique);

// currenciesUnique.forEach(function (curVal, _, map) {
//   console.log(`${curVal}: ${curVal} `);
// });

// Note Map method
const eurtoUSD = 1.1;

// const movementsUSD = movements.map(curr => curr * eurtoUSD);
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurtoUSD);
// console.log(movementsUSDfor);

// const movementDescriptions = movements.map((mov, i) => {
//   return `Movement ${i + 1}: You ${
//     mov > 0 ? 'deposited' : 'withdrew'
//   } ${Math.abs(mov)}`;
// });

// console.log(movementDescriptions);

//Note filter method

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositFor = [];
// for (const mov of movements) if (mov > 0) depositFor.push(mov);
// console.log(depositFor);

// const withdrawal = movements.filter(val => val <= 0);
// console.log(withdrawal);

//Note Reduce method
// const balance = movements.reduce((acc, cur, i) => acc + cur, 0);

// console.log(balance);

// let sum = 0;
// for (const mov of movements) sum += mov;
// console.log(balance);

// // maximum value

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);

// console.log(max);

// Note chaining methods

// pipelined
// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   // .map(mov => mov * eurtoUSD)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * eurtoUSD;
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositUSD);

//Note Find method
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// Note

const x = new Array(7);
console.log(x);

x.fill(1, 3, 5);
console.log(x.fill(2));

// array.from

const y = Array.from({ length: 7 }, () => 1);

console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);

console.log(z);

// const ran = Array.from(
//   { length: 100 },
//   curr => Math.trunc(Math.random() * 6) + 1
// );
// console.log(ran);

// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));

// console.log(movementsUI);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value')
//   );

//   console.log(movementsUI);
// });

// // 1)
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// // 2)
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => (cur >= 1000 ? ++acc : acc), 0);

// console.log(numDeposits1000);

// // 3)
// const { deposits, withdrawls } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.widrawls += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawls'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawls: 0 }
//   );

// console.log(deposits, withdrawls);

//Challange 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1)
dogs.forEach((val, i, arr) => {
  dogs[i].recommendedFood = val.weight ** 0.75 * 28;
});

// 2)
const dogSarah = dogs.forEach((val, i) => {
  if (val.owners.includes('Sarah')) {
    console.log(
      `${val.owners}'s dog is ${
        val.curFood >= val.recommendedFood * 0.9 &&
        val.curFood <= val.recommendedFood * 1.1
          ? ' '
          : 'not'
      } eating enough food`
    );
  }
});

/*
3 

"Matilda and Alice and Bob's dogs eat too much!"
 "Sarah and John and Michael's dogs eat too little!

*/
const ownersEatTooMuch = dogs
  .filter(val => val.curFood > val.recommendedFood * 1.1)
  .map(dog => dog.owners)
  .flat();

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(val => val.curFood < val.recommendedFood * 0.9)
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooLittle);

// 4
console.log(`${ownersEatTooMuch.join(' & ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' & ')}'s dogs eat too Little`);

//5
console.log(
  `${dogs.filter(dog => dog.curFood === dog.recommendedFood).includes()}`
);

// dogs.forEach((val, i) => {
//   return val.curFood < val.recommendedFood * 0.9
//     ? `${ownersEatTooLittle.flat()}'s dogs eat too little`
//     : val.curFood > val.recommendedFood * 1.1
//     ? `${ownersEatTooLittle.flat()}'s dogs eat too much`
//     : ``;

//   // if (val.curFood < val.recommendedFood * 0.9) {
//   //   ownersEatTooLittle.push(val.owners);
//   // } else if (val.curFood > val.recommendedFood * 1.1) {
//   //   ownersEatTooMuch.push(val.owners);
//   // }
// });

// dogs.filter((val, i, arr) => {
//   if (val.curFood < val.recommendedFood * 0.9) {
//     ownersEatTooLittle.push(val.owners);
//     console.log(
//       `${ownersEatTooLittle.flat().join(' & ')}'s dogs eat too little`
//     );
//   } else if (val.curFood > val.recommendedFood * 1.1) {
//     ownersEatTooMuch.push(val.owners);
//     console.log(`${ownersEatTooMuch.flat().join(' & ')}'s dogs eat too much`);
//   }
// });
