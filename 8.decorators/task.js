//Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];

  return function (...args) {
    if (cache.length === 5) cache.shift();
  
    const hash = md5(args);

    const findIndex = cache.findIndex(el => el.hash === hash);

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
  let timeout;

  function wrapper (...args) {
    clearTimeout(timeout);

    if (!timeout) {
      func.apply(this, args);
      wrapper.count += 1;
    }

    wrapper.allCount++;

    timeout = setTimeout(() => {
      func.apply(this, args);
      wrapper.count++;
    }, delay);

  };

  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
