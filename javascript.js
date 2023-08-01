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

/* Display each book on page from myLibrary array. */
function displayBookOnPage(myLibrary) {
  const bookLayoutArea = document.querySelector(".book-layout-area");
  resetBookLayoutDisplay(bookLayoutArea);

  myLibrary.forEach((book, index) => {
    createBookDisplayCard(book, index);
  });
}

/* Reset display area */
function resetBookLayoutDisplay(bookLayoutArea) {
  while (bookLayoutArea.firstChild) {
    bookLayoutArea.removeChild(bookLayoutArea.firstChild);
  }
}

/* Remove a book from the library[] and display */
function removeBookFromLibrary(index) {
  const selectRemoveBookButton = document.querySelector(
    `[data-index-number="${index}"]`
  );

  selectRemoveBookButton.addEventListener("click", (e) => {
    const removeElement = document.querySelector(
      `[data-book-number="${index}"]`
    );
    removeElement.remove();
    myLibrary.splice(index);
  });
}

/* Build a card for book display */
function createBookDisplayCard(book, index) {
  // Create Card wrapper
  const selectLibraryDisplay = document.querySelector(".book-layout-area");
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-book-number", index);
  selectLibraryDisplay.appendChild(card);

  // Body
  const selectCard = document.querySelector(".book-layout-area").lastChild;
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  selectCard.appendChild(cardBody);

  // Title
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.replaceChildren(book.title);
  selectCard.lastChild.appendChild(cardTitle);

  // Sub-title
  const cardSubTitle = document.createElement("h6");
  cardSubTitle.classList.add("card-subtitle", "mb-2", "text-muted");
  cardSubTitle.replaceChildren(book.author);
  selectCard.lastChild.appendChild(cardSubTitle);

  // <p>
  const cardPara = document.createElement("p");
  cardPara.classList.add("card-text");
  cardPara.replaceChildren(book.pages + " pages");
  selectCard.lastChild.appendChild(cardPara);

  // button Read/Unread
  const cardButtonReadStatus = document.createElement("button");
  cardButtonReadStatus.classList.add("btn", "btn-primary");
  cardButtonReadStatus.setAttribute("type", "button");
  cardButtonReadStatus.setAttribute("id", "isBookRead");
  const isRead = "Read";
  const unRead = "Unread";
  cardButtonReadStatus.replaceChildren(isRead);
  selectCard.lastChild.appendChild(cardButtonReadStatus);

  // button Remove book
  const cardButtonRemoveBook = document.createElement("button");
  cardButtonRemoveBook.classList.add("btn", "btn-danger");
  cardButtonRemoveBook.setAttribute("type", "button");
  cardButtonReadStatus.setAttribute("id", "removeBook");
  const removeBookText = "Remove";
  cardButtonRemoveBook.setAttribute("data-index-number", index);
  cardButtonRemoveBook.replaceChildren(removeBookText);
  selectCard.lastChild.appendChild(cardButtonRemoveBook);

  removeBookFromLibrary(index);
}
