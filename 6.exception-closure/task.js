// -------------------- 1 task --------------------
function parseCount(val) { 
  let num = parseFloat(val, 10);

  if (isNaN(val)) {
    throw new Error('Невалидное значение');
  }

  return num;
}

function validateCount(val) {
  try {
    return parseCount(val);
  } catch(err) {
    return err;
  }
}

// -------------------- 2 task --------------------
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (a + b < c || b + c < a || c + a < b) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const p = this.perimeter / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(s.toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (err) {
    return {
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      get area() {
        return 'Ошибка! Треугольник не существует';
      } 
    };
  }
}
