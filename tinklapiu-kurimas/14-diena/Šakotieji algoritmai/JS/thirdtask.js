"use strict";

function calculateCandies() {
  const gradesInput = prompt(
    "What grades did Petriuk get?"
  );

  const grades = gradesInput.split(' ').map(Number);

  const total = grades.reduce((sum, grade) => sum + grade, 0);
  const average = total / grades.length;

  let candies;
  if (average > 9) {
    candies = 3;
  } else if (average >= 7) {
    candies = 2;
  } else {
    candies = 1;
  }


  console.log(`Petriuk will receive ${candies} candies`);
}

calculateCandies();
