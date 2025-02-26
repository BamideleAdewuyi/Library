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

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render(myLibrary);
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

function render() {
    libraryDisplay.replaceChildren();

    for (i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEL = document.createElement("div");
        bookEL.setAttribute("class", "bookCard");
        bookEL.innerHTML = `
            <div class="cardHeader">
                <h3 class="title">${book.title}</h3
                <h5 class="author">by ${book.author}</h5>
            </div>
            <div class="cardBody">
                <p>${book.pages} pages</p>
                <p class="readStatus">${book.read ? "Read" : "Not Read Yet"}</p>
                <button class="removeButton" onclick="removeBook(${i})">Remove</button>
                <button class="toggleReadButton" onclick="toggleRead(${i})">Toggle Read</button>
            </div>
        `;
        libraryDisplay.appendChild(bookEL);
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
    addBookToLibrary();
    newBookForm.reset();
    dialog.close();
})

