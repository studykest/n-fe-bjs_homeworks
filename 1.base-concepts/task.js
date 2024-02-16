"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    return arr;
  } else if (d > 0) {
    arr.push(
      (-b + Math.sqrt(d)) / (2 * a),
      (-b - Math.sqrt(d)) / (2 * a)
    );
  } else {
    arr.push(-b / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}
