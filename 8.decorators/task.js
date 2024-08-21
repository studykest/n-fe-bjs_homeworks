//Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];

  return function (...args) {
    const hash = md5(args);

    const findIndex = cache.findIndex(el => el.hash === hash);

    if (cache.length === 5) cache.shift();

    if (findIndex !== -1) {
      return `Из кеша: ${cache[findIndex].value}`;
    } 
    
    if (findIndex === -1){
      let result = func(...args);
      cache.push({hash, value: result});
      return `Вычисляем: ${result}`;
    }
  }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  
}

const addAndMultiply = (a, b, c) => (a + b) * c;

const upgraded = cachingDecoratorNew(addAndMultiply);

console.log(upgraded(1, 2, 3)); // вычисляем: 9
console.log(upgraded(1, 2, 3)); // из кеша: 9
console.log(upgraded(2, 2, 3)); // вычисляем: 12
console.log(upgraded(3, 2, 3)); // вычисляем: 15
console.log(upgraded(4, 2, 3)); // вычисляем: 18
console.log(upgraded(5, 2, 3)); // вычисляем: 21
console.log(upgraded(6, 2, 3)); // вычисляем: 24 (при этом кеш для 1, 2, 3 уничтожается)
console.log(upgraded(1, 2, 3)); // вычисляем: 9  (снова вычисляем, кеша нет)