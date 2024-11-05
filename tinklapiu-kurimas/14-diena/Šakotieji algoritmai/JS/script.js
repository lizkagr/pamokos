"use strict";

// FIRST TASK

// -------------------------

const g = 9.8;

function willParachuteOpen() {
    
  const height = parseInt(prompt("What is the height?"));

  const time = parseInt(prompt("How many sec does it take to open parachute?"));


  const fallTime = parseInt((2 * height) / g);
  if (time >= fallTime) {
    return "Parachute will not open";
  } else {
    return "Parachute will open";
  }
}

console.log(willParachuteOpen());



// -------------------------
