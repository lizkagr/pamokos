// SECOND TASK

// -----------------------------

const FishInAqua = 1;
let totalFish = parseInt(prompt("How many fish live in an aquarium?"));
let AddFish = parseInt(
  prompt("How many fish are placed in the aquarium each day?")
);
let totalDays = parseInt(prompt("How many days have passed?"));

let FishAdder = totalFish + AddFish * totalDays;

console.log("Fish added: " + FishAdder);

// -----------------------------
