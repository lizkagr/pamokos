
// FIRST TASK

// -------------------

let lessonsMonday = parseInt(prompt("How many classes are there on Monday?"));
let lessonsTuesday = parseInt(prompt("How many classes are there on Tuesday?"));
let lessonsWednesday = parseInt(prompt("How many classes are there on Wednesday?"));
let lessonsThursday = parseInt(prompt("How many classes are there on Thursday?"));
let lessonsFriday = parseInt(prompt("How many classes are there on Friday?"));

let totalLessons =
  lessonsMonday +
  lessonsTuesday +
  lessonsWednesday +
  lessonsThursday +
  lessonsFriday;

let totalMinutes = totalLessons * 45;

console.log("Number of lessons: " + totalLessons);
console.log("This is in minutes: " + totalMinutes);

// -------------------
