let myLibrary = [];

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

/* Add Book to myLibrary array. */
function addBookToLibrary() {}

/* Test code */
// const theHobbit = new Book("The Hobbit", "J.R.R", 295, false);

// console.log(theHobbit.info());
