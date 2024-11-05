function checkFrogWeight() {
  const frogWeight = parseFloat(prompt("How much does a frog weigh?"));

  const numberOfFrogs = parseInt(
    prompt("How many frogs do you want to observe?")
  );

  const totalWeightKg = (frogWeight * numberOfFrogs) / 1000;

  if (totalWeightKg > 5) {
    console.log("Enough for monitoring frogs");
  } else {
    console.log("Too small for monitoring frogs");
  }
}

checkFrogWeight();
