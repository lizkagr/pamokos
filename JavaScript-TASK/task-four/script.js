function filterItems(arr, query) {
  const filtered = arr.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  if (filtered.length === 0) {
    return [];
  }

  const result = filtered.map((item) => "*" + item);

  return result.sort();
}

const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

console.log(filterItems(friends, "ka")); // ["*Marika", "*Rika"];

console.log(filterItems(friends, "e")); // ["*Alex", "*Oliver"];
