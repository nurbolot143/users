const db = require("../db");
const queries = require("../queries/bookQueries");

const getBooks = async (req, res) => {
  try {
    const books = db.query(queries.getBooks);

    res.status(200).json((await books).rows);
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: "Failed to get books!" });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await db.query(queries.getBookById, [id]);

    if (!book.rows.length) {
      return res.status(500).json({ message: "Book is not found" });
    }

    res.status(200).json(book.rows[0]);
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: "Failed to get book!" });
  }
};

const addBook = async (req, res) => {
  try {
    const { title, author } = req.body;

    if (!title.trim() || !author.trim()) {
      return res.status(500).json({ message: "Invalid values" });
    }

    await db.query(queries.addBook, [title, author]);

    res.status(200).json({ message: "Book created Successfully!" });
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: "Failed to add book!" });
  }
};

const removeBook = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query(queries.removeUserBook, [id]);
    await db.query(queries.removeBook, [id]);

    res.status(200).json({ message: "Book delted Successfully!" });
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: "Failed to remove book!" });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author } = req.body;

    if (!title.trim() || !author.trim()) {
      return res.status(500).json({ message: "Invalid values" });
    }

    await db.query(queries.updateBook, [id, title, author]);

    res.status(200).json({ message: "Book updated Successfully!" });
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: "Failed to update book!" });
  }
};

module.exports = { getBooks, getBookById, addBook, removeBook, updateBook };
