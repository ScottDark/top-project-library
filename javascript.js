loadEventListeners();

/* Constructor for creating books.
   @para title, author, pages, read 
   @func info() returns Book information */
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

/* Add Book object to Library array.
  @para bookInfo form data from user
  @return adds book to myLibrary Array */
function addBookToLibrary(bookInfo) {
  let myLibrary = [];

  let title = bookInfo.title.value;
  let author = bookInfo.author.value;
  let pages = bookInfo.pages.value;
  let read = bookInfo.bookStatus.checked;

  const book = new Book(title, author, pages, read);

  myLibrary.push(book);

  return myLibrary;
}

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
