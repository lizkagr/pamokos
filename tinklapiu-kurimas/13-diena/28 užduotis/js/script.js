
// FIRST TASK

// -------------------

let lessonsMonday = parseInt(prompt("Сколько занятий в понедельник?"));
let lessonsTuesday = parseInt(prompt("Сколько уроков во вторник?"));
let lessonsWednesday = parseInt(prompt("Сколько занятий в среду?"));
let lessonsThursday = parseInt(prompt("Сколько занятий в четверг?"));
let lessonsFriday = parseInt(prompt("Сколько занятий в пятницу?"));

let totalLessons =
  lessonsMonday +
  lessonsTuesday +
  lessonsWednesday +
  lessonsThursday +
  lessonsFriday;

let totalMinutes = totalLessons * 45;

console.log("Количество уроков: " + totalLessons);
console.log("Это составляет минут: " + totalMinutes);

// -------------------
