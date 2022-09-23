const getBooks = `select * from book`;
const getBookById = `select * from book where id = $1`;
const addBook = `insert into book (title, author) values ($1, $2)`;
const removeUserBook = `delete from books where book_id = $1`;
const removeBook = `delete from book where id = $1`;
const updateBook = `update book set title = $2, author = $3 where id = $1`;

module.exports = {
  getBooks,
  getBookById,
  addBook,
  removeBook,
  removeUserBook,
  updateBook,
};
