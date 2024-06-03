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
