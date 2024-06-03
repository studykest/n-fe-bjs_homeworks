// -------------------- 1 task --------------------
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this._state * 1.5;
  }

  set state(number) {
    if (number < 0) {
      this._state = 0;
    } else if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// -------------------- 2 task --------------------
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let resSearch = this.books.find((book) => book[type] === value);

    if (resSearch) {
      return resSearch;
    }
    
    return null;
  }

  giveBookByName(bookName) {
    let resSearch = this.books.findIndex((book) => book.name === bookName);
    
    if (resSearch >= 0) {
      return this.books.splice(resSearch, 1)[0];
    }
    
    return null;
  }
}

let library = new Library('Библиотека');

library.addBook(new DetectiveBook('Майк Омер', 'Странные игры', 2024, 384));
library.addBook(new FantasticBook('Анри Софи', 'Король Ардена', 2024, 608));
library.addBook(new NovelBook('Цвейг Стефан', 'Случай на Женевском озере', 1919, 3));

library.findBookBy('releaseDate', 1919).name;
let handsBook = library.giveBookByName('Король Ардена');
handsBook.state -= 50;
handsBook.fix();
library.addBook(handsBook);

// -------------------- 3 task --------------------
class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }

  addMark(mark, subjectName) {
    if (mark < 2 || mark > 5) {
      return;
    }

    if (this.subjectsName.length) {
      this.subject = subjectName;

      if (this.subject) {
        this.marks[subjectName].push(mark);
        return;
      }
    }
    
    this.marks[subjectName] = [mark];
  }

  getAverageBySubject(subjectName) {
    this.subject = subjectName;

    if (this.subject) {
      this.sumMarks = this.marks[subjectName]
      return this.sumMarks / this.marks[subjectName].length;
    }

    return 0;
  }

  getAverage() {
    if (this.subjectsName.length) {
      return this.subjectsName.reduce(
        (accum, currentSubject) => accum + this.getAverageBySubject(currentSubject), 0
      ) / this.subjectsName.length;
    }

    return 0;
  }

  get subjectsName() {
    return Object.keys(this.marks);
  }

  set subject(subjectName) {
    this._subject = this.subjectsName.find((subject) => subject === subjectName);
  }

  get subject() {
    return this._subject;
  }

  set sumMarks(marks) {
    this._sumMarks = marks.reduce((accum, currentMark) => accum + currentMark);
  }

  get sumMarks() {
    return this._sumMarks;
  }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
student.getAverage(); // Средний балл по всем предметам 4.75
