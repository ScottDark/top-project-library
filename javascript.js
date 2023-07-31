loadEventListeners();

/* Load event listeners. */
function loadEventListeners() {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    const getBookInfoFromUser = document.querySelector("#book-form");

    addBookToLibrary(getBookInfoFromUser);
  });
}

/* Test code */
// const theHobbit = new Book("The Hobbit", "J.R.R", 295, false);

// console.log(theHobbit.info());

/* Constructor for creating books. */
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let bookInfo =
      this.title + " by " + this.author + ", " + this.pages + " pages, ";

    if (read === true) {
      return bookInfo + "has been read.";
    } else {
      return bookInfo + "not read yet.";
    }
  };
}

/* Add Book object to Library array. */
const myLibrary = [];
function addBookToLibrary(bookInfo) {
  let title = bookInfo.title.value;
  let author = bookInfo.author.value;
  let pages = bookInfo.pages.value;
  let read = bookInfo.bookStatus.checked;

  const book = new Book(title, author, pages, read);

  myLibrary.push(book);

  displayBookOnPage(myLibrary);
}

/* Display each book on page from myLibrary array. 
  @para myLibrary[] */
function displayBookOnPage(myLibrary) {
  const bookLayoutArea = document.querySelector(".book-layout-area");
  resetBookLayoutDisplay(bookLayoutArea);
  myLibrary.forEach((book) => {
    createBookDisplayCard();
  });
}

/* Reset display area */
function resetBookLayoutDisplay(bookLayoutArea) {
  while (bookLayoutArea.firstChild) {
    bookLayoutArea.removeChild(bookLayoutArea.firstChild);
  }
}

/* Build a card for book display */
function createBookDisplayCard() {
  const selectLibraryDisplay = document.querySelector(".book-layout-area");
  const createDiv = document.createElement("div");
  createDiv.classList.add("card");
  selectLibraryDisplay.appendChild(createDiv);

  // const selectCard = document.querySelector(".card");
  // createDiv.classList.add("card-body");
  // selectCard.appendChild(createDiv);
}
