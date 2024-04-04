/* 
The switch statment exercise 
*/

function languageSwitch(lang) {
  switch (lang) {
    case `Chinese`:
    case `mandarin`:
      console.log(`MOST number of native speakers!`);
      break;
    case `spanish`:
      console.log(`2nd most native speakers`);
      break;
    case `English`:
      console.log(`3rd place`);
      break;
    case `hindi`:
      console.log(`Number 4`);
      break;
    case `arabic`:
      console.log(`5th most spoken language`);
      break;
    default:
      console.log(`Great language too :D`);
      break;
  }
}

languageSwitch(`Chinese`);

languageSwitch(`dkajkfd`);
