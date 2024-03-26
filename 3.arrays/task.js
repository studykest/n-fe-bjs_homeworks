function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((elem, index) => elem === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  if (!users.length) {
    return 0
  };

  let usersGenderOne = users.filter(user => user.gender === gender);

  let usersCount = usersGenderOne.length;
  if (!usersCount) {
    return 0
  };

  return usersGenderOne
    .map(user => user.age)
    .reduce((sum, age) => sum + (age / usersCount), 0);
}

// -------------------- tests to 1 task --------------------

console.assert(compareArrays([8, 9], [6]) === false);
console.assert(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]) === false);
console.assert(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]) === false);
console.assert(compareArrays([1, 2, 3], [2, 3, 1]) === false);
console.assert(compareArrays([8, 1, 2], [8, 1, 2]));

// -------------------- tests to 2 task --------------------

const people = [
  { firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской" },
  { firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской" },
  { firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский" },
  { firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский" },
  { firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский" },
  { firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский" },
  { firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской" },
  { firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской" },
  { firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской" },
  { firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский" },
  { firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской" },
  { firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской" },
  { firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской" },
  { firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской" },
];

console.assert(getUsersNamesInAgeRange(people, "мужской") === 32);
console.assert(getUsersNamesInAgeRange(people, "женский") === 27.4);
console.assert(getUsersNamesInAgeRange([], "женский") === 0);
console.assert(getUsersNamesInAgeRange(people, "инопланетянин") === 0);
