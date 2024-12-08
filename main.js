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
};

Book.prototype.isRead = function(this) {
    if (this.read == true) {
        this.read = false;
    }
    else {
        this.read = true;
    }
};

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function display(array) {
    libraryDisplay.replaceChildren();

    for (i = 0; i < array.length; i++) {

        let newCard = document.createElement("div");
        newCard.id = `book${i}`;
        newCard.className = "book";
        newCard.index = i;
    
        let newTitle = document.createElement('p');
        newTitle.innerText = `Title: ${array[i].title}`;
        let newAuthor = document.createElement('p');
        newAuthor.innerText = `Author: ${array[i].author}`;
        let newPages = document.createElement('p');
        newPages.innerText = `Pages: ${array[i].pages}`;
        let newRead = document.createElement('p');
        newRead.innerText = `Read: ${array[i].read}`;

        let readButton = document.createElement("button");
        readButton.innerText = "Toggle Read Status";
        readButton.className - "readButton";

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete Book";
        deleteButton.className = "deleteButton";
        deleteButton.addEventListener("click", () => {
            myLibrary.splice(newCard.index, 1);
            display(myLibrary);
        });
    
        newCard.appendChild(newTitle);
        newCard.appendChild(newAuthor);
        newCard.appendChild(newPages);
        newCard.appendChild(newRead);
        newCard.appendChild(deleteButton);
        newCard.appendChild(readButton);
        libraryDisplay.appendChild(newCard);
    }
}

newBookButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

newBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let readOrNot = false
    if (read.value == "Read") {
        readOrNot = true;
    }

    new Book(title.value, author.value, pages.value, readOrNot);
    display(myLibrary);
    newBookForm.reset();
    dialog.close();
})

