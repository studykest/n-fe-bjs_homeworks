function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return  arr1.every((elem, index) => elem === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {

}

// -------------------- tests to 1 task --------------------

console.assert(compareArrays([8, 9], [6]) === false);
console.assert(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]) === false);
console.assert(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]) === false);
console.assert(compareArrays([1, 2, 3], [2, 3, 1]) === false);
console.assert(compareArrays([8, 1, 2], [8, 1, 2]));
