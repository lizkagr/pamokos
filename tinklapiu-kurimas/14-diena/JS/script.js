"use strict";

console.log(3 + +2101010);
console.log("HI! Diema 14");
let x = "2";
console.log(typeof parseInt(x));

const brolial = ["Jusrgis", "Antanas", "Aloyaz", "Martynas"];

console.log(brolial);

brolial[1] = "Julius";

// 0

console.log(brolial);
let sum = 0 
while (true) 
 {
    const input = parseInt(prompt('write 0 to unlock programma'));
     if (input === 0 ) {
        break;
     }
     sum = sum + input;
    
 }
 console.log(``);

//  let i = -1; 
//  while (i <= n) {

//  }

for ( let i = 1; i <=100; i++) { 
    if (i % 2 === 0) {
        console.log(i); 
    }
    console.log(`Number ${i} does not divinre by 2`);
    
}

for ( let i = 1; i <=100; i++) { 
    if (i === 22) {
        break;
    }
    console.log(i);
}