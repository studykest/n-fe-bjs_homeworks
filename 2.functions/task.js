function getArrayParams(...arr) {
  let min = Math.min(...arr),
      max = Math.max(...arr);

  let sum = arr.reduce((num1, num2) => num1 + num2);
  let avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length !== 0) {
    return arr.reduce((num1, num2) => num1 + num2);
  }

  return 0;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length !== 0) {
    let min = Math.min(...arr),
        max = Math.max(...arr);

    return max - min;
  }

  return 0;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0,
      sumOddElement = 0;

  for (elem of arr) {
    if (elem % 2 === 0) {
      sumEvenElement += elem;
    } else {
      sumOddElement += elem;
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0,
      countEvenElement = 0;

  for (elem of arr) {
    if (elem % 2 === 0) {
      sumEvenElement += elem;
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {

}

// -------------------- tests to 1 task --------------------

let textError = null;

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

// -------------------- tests to 2 task --------------------

console.assert(summElementsWorker() === 0);
console.assert(summElementsWorker(10, 10, 11, 20, 10) === 61);

console.assert(differenceMaxMinWorker() === 0);
console.assert(differenceMaxMinWorker(10, 10, 11, 20, 10) === 10);

console.assert(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17) === 53);
console.assert(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35) === -269);

console.assert(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9) === 5);
console.assert(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35) === 38);
