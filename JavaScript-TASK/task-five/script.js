function calculateSimpleInterest(P, R, T) {
  let simpleInterest = (P * R * T) / 100;
  return simpleInterest;
}

let P = 10000; // pagrindinė suma
let R = 8.5; // palūkanų norma per metus
let T = 3; // laikotarpis metais

let result = calculateSimpleInterest(P, R, T);
console.log("Paprasčios palūkanos:", result);
