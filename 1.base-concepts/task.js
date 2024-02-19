"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let d = Math.pow(b, 2) - 4 * a * c;

  if (d > 0) {
    arr.push(
      (-b + Math.sqrt(d)) / (2 * a),
      (-b - Math.sqrt(d)) / (2 * a)
    );
  }

  if (d === 0) {
    arr.push(-b / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = (percent / 100) / 12;
  let creditBody = amount - contribution;
  let MontlyPayment = creditBody * (
    monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1))
  )
  let totalSum = MontlyPayment * countMonths;

  return Number(totalSum.toFixed(2));
}

console.assert(calculateTotalMortgage(10, 0, 50000, 12) === 52749.53);
console.assert(calculateTotalMortgage(10, 1000, 50000, 12) === 51694.54);
console.assert(calculateTotalMortgage(10, 0, 20000, 24) === 22149.56);
console.assert(calculateTotalMortgage(10, 1000, 20000, 24) === 21042.09);
console.assert(calculateTotalMortgage(10, 20000, 20000, 24) === 0);
console.assert(calculateTotalMortgage(10, 0, 10000, 36) === 11616.19);
console.assert(calculateTotalMortgage(15, 0, 10000, 36) === 12479.52);
