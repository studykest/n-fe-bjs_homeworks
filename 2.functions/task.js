function getArrayParams(...arr) {
  let min = Math.min(...arr),
    max = Math.max(...arr);

  let sum = arr.reduce((num1, num2) => num1 + num2);
  let avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork(arrOfArr, func) {

}

// -------------------- tests to 1 task --------------------

let textError = '';

let getResultCompare = function (objResult, objExpect) {
  for (elem in objResult) {
    if (objResult[elem] !== objExpect[elem]) {
      textError = `ожидается ${elem}: ${objExpect[elem]}, но получаем ${elem}: ${objResult[elem]}`;
      return;
    }
  }
  return true;
}

console.assert(
  getResultCompare(
    getArrayParams(-99, 99, 10), { min: -99, max: 99, avg: 3.33 }
  ), textError
);
console.assert(
  getResultCompare(
    getArrayParams(1, 2, 3, -100, 10), { min: -100, max: 10, avg: -16.80 }
  ), textError
);
console.assert(
  getResultCompare(
    getArrayParams(5), { min: 5, max: 5, avg: 5 }
  ), textError
);
