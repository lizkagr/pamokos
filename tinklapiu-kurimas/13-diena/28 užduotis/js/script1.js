// SECOND TASK

// -----------------------------

const FishInAqua = 1;
let totalFish = parseInt(prompt("Сколько рыб живёт в аквариуме"));
let AddFish = parseInt(
  prompt("Сколько рыб помещается в аквариум каждый день?")
);
let totalDays = parseInt(prompt("Сколько дней прошло?"));

let FishAdder = totalFish + (AddFish * totalDays);

console.log("Рыбок добавлено: " + FishAdder);

// -----------------------------
