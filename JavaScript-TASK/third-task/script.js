function sumPositiveNumbers() {
  let sum = 0;
  let number;

  while (true) {
    number = parseInt(
      prompt("Enter a number (a negative number will terminate the job):"),
      10
    );

    if (number < 0) {
      break;
    }

    if (number > 0) {
      sum += number;
    }
  }

  console.log("Sum of numbers:", sum);
}

sumPositiveNumbers();
