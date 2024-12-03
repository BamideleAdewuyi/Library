// Html objects
const container = document.querySelector(".container");
const libraryDisplay = document.querySelector("#libraryDisplay");

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

function display(array) {
    for (let i = 0; i < array.length; i++) {
        let newCard = document.createElement("div");
        newCard.id = array[i].title;
        newCard.className = "book";
        
        const newTitle = document.createTextNode(`Title: ${array[i].title}`);
        const newAuthor = document.createTextNode(`Author: ${array[i].author}`);
        const newPages = document.createTextNode(`Pages: ${array[i].pages}`);
        const newRead = document.createTextNode(`Author: ${array[i].read}`);

        newCard.appendChild(newTitle);
        newCard.appendChild(newAuthor);
        newCard.appendChild(newPages);
        newCard.appendChild(newRead);
        libraryDisplay.appendChild(newDiv);
    }
}