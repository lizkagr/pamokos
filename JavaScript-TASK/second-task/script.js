const positives = (arr) => {
  if (!Array.isArray(arr)) {
    return "Ошибка: передан не массив!";
  }

  return arr.filter((num) => num > 0);
};

console.log(positives([1, -3, 5, -3, 0])); // [1, 5]
console.log(positives([1, 2, 3])); // [1, 2, 3]
console.log(positives([-1, -2, -3])); // []

console.log(positives("не массив")); // 'Ошибка: передан не массив!'
