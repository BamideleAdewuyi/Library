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

Book.prototype.isRead = function() {
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




        // let newCard = document.createElement("div");
        // newCard.id = `book${i}`;
        // if (array[i].read == true) {
        //     newCard.className = "readBook";
        // }
        // else {
        //     newCard.className = "unreadBook";
        // }
        // newCard.index = i;
    
        // let newTitle = document.createElement('p');
        // newTitle.innerText = `Title: ${array[i].title}`;
        // let newAuthor = document.createElement('p');
        // newAuthor.innerText = `Author: ${array[i].author}`;
        // let newPages = document.createElement('p');
        // newPages.innerText = `Pages: ${array[i].pages}`;
        // let newRead = document.createElement('p');
        // if (array[i].read) {
        //     newRead.innerText = `You have read this book`;
        // }
        // else {
        //     newRead.innerText = `You have NOT read this book`;
        // }
        // let readButton = document.createElement("button");
        // readButton.innerText = "Toggle Read Status";
        // readButton.className - "readButton";
        // readButton.addEventListener("click", array[i].isRead());

        // let deleteButton = document.createElement("button");
        // deleteButton.innerText = "Delete Book";
        // deleteButton.className = "deleteButton";
        // deleteButton.addEventListener("click", () => {
        //     myLibrary.splice(newCard.index, 1);
        //     render(myLibrary);
        // });
    
        // newCard.appendChild(newTitle);
        // newCard.appendChild(newAuthor);
        // newCard.appendChild(newPages);
        // newCard.appendChild(newRead);
        // newCard.appendChild(deleteButton);
        // newCard.appendChild(readButton);
        // libraryDisplay.appendChild(newCard);
    // }
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
    render(myLibrary);
    newBookForm.reset();
    dialog.close();
})

