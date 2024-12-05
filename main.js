// Html objects
const container = document.querySelector(".container");
const libraryDisplay = document.querySelector("#libraryDisplay");
const dialog = document.querySelector("dialog");

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
let expectations = new Book(`Great Expectations`, `Charles Dickens`, 750, true);
let daughter = new Book(`The Daughter of Time`, `Josephine Tey`, 214, false);


function display(array) {
    for (let i = 0; i < array.length; i++) {
        let newCard = document.createElement("div");
        newCard.id = array[i].title;
        newCard.className = "book";
        
        const newTitle = document.createElement('p');
        newTitle.innerText = `Title: ${array[i].title}`;
        const newAuthor = document.createElement('p');
        newAuthor.innerText = `Author: ${array[i].author}`;
        const newPages = document.createElement('p');
        newPages.innerText = `Pages: ${array[i].pages}`;
        const newRead = document.createElement('p');
        newRead.innerText = `Read: ${array[i].read}`;

        newCard.appendChild(newTitle);
        newCard.appendChild(newAuthor);
        newCard.appendChild(newPages);
        newCard.appendChild(newRead);
        libraryDisplay.appendChild(newCard);
    }
}

display(myLibrary);