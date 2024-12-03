// Html objects
const container = document.querySelector(".container");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    addBookToLibrary(this);
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

let bondage = new Book(`Of Human Bondage`, `William Somerset Maugham`, 648, true);

