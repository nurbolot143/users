const db = require("../db");
const queries = require("../queries/userQueries");

const addUserBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { bookId } = req.body;

    if (!bookId) {
      return res.status(500).json({ message: "Invalid value!" });
    }

    const book = await db.query(queries.getBook, [id, bookId]);

    if (book.rows.length) {
      return res.status(500).json({ message: "Book already exists!" });
    }

    await db.query(queries.addUserBook, [id, bookId]);

    res.status(200).json({ message: "UserBook added Successfully!" });
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: "Failed to add userBook!" });
  }
};

const removeBookByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { bookId } = req.body;

    if (!bookId) {
      return res.status(500).json({ message: "Invalid value!" });
    }

    const book = await db.query(queries.getBook, [id, bookId]);

    if (!book.rows.length) {
      return res.status(500).json({ message: "Book does not exist!" });
    }

    await db.query(queries.removeBookByUser, [id, bookId]);

    res.status(200).json({ message: "UserBook deleted Successfully!" });
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: "Failed to delete userBook!" });
  }
};

module.exports = { addUserBook, removeBookByUser };
