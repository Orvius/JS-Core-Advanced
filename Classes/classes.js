// Создайте класс Book со свойствами названия,
// автора и года публикации. Включите метод
// отображения сведений о книге. Создайте
// подкласс под названием «Ebook», который
// наследуется от класса «Book» и включает
// дополнительное свойство для цены книги.
// Переопределите метод отображения, чтобы
// включить цену книги. Создайте экземпляр
// класса «Электронная книга» и отобразите его
// сведения

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  displayInfo() {
    return `Название книги: ${this.title}, автор: ${this.author}, год публикации: ${this.year}`;
  }
}

class Ebook extends Book {
  constructor(title, author, year, price) {
    super(title, author, year);
    this.price = price;
  }

  displayInfo() {
    super.displayInfo();
    return `${super.displayInfo()}, цена: ${this.price}$`;
  }
}

let ebook = new Ebook("1984", "Джордж Оруэлл", 1949, 10);

console.log(ebook.displayInfo());
