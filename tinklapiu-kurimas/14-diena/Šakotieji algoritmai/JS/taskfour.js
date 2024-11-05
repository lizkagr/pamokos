"use strict";

const a = parseInt(prompt("Enter the start of the interval:"));
const b = parseInt(prompt("Enter end of interval:"));

let count = 0;
for (let i = a; i <= b; i++) {
  if (i % 6 === 0) {
    count++;
  }
}

console.log(count);
