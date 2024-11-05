"use strict";

const n = parseInt(prompt("Enter the number of steps to school:"));

let applause = 0;
let clicks = 0;

for (let i = 1; i <= n; i++) {
  if (i % 10 === 0) {
    applause++;
  };
  if (i % 10 === 5) {
    clicks++;
  }
}
console.log(`Applause wiil be: ${applause}`);
console.log(`There wiil be: ${clicks} clicks`);
