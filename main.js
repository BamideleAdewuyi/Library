// Html objects
const container = document.querySelector(".container");
const libraryDisplay = document.querySelector("#libraryDisplay");
const dialog = document.querySelector("dialog");
const newBookButton = document.querySelector("#newBookButton");
const addBookButton = document.querySelector("#addBookButton");
const closeButton = document.querySelector(".closeButton");
const newBookForm = document.querySelector(".newBookForm");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

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

function display(array) {
    let newCard = document.createElement("div");
    newCard.id = `book${array.length-1}`;
    newCard.className = "book";
    newCard.index = array.length-1;

    let newTitle = document.createElement('p');
    newTitle.innerText = `Title: ${array[array.length-1].title}`;
    let newAuthor = document.createElement('p');
    newAuthor.innerText = `Author: ${array[array.length-1].author}`;
    let newPages = document.createElement('p');
    newPages.innerText = `Pages: ${array[array.length-1].pages}`;
    let newRead = document.createElement('p');
    newRead.innerText = `Read: ${array[array.length-1].read}`;
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete Book";
    deleteButton.className = "deleteButton";
    deleteButton.addEventListener("click", (e) => {
        delete myLibrary[newCard.index];
        deleteButton.parentElement.remove();
        deleteButton.remove();
    });

    newCard.appendChild(newTitle);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newPages);
    newCard.appendChild(newRead);
    newCard.appendChild(deleteButton);
    libraryDisplay.appendChild(newCard);
    console.log(newCard.index);
    console.log(myLibrary);
}

newBookButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

newBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    new Book(title.value, author.value, pages.value, read.value);
    display(myLibrary);
    newBookForm.reset();
    dialog.close();
})

