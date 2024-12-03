const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let bondage = new Book(`Of Human Bondage`, `William Somerset Maugham`, 648, true);