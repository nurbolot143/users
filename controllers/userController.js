const db = require("../db");
const queries = require("../queries/userQueries");

const getUsers = async (req, res) => {
  try {
    const users = await db.query(queries.getUsers);

    res.status(200).json(users.rows);
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: "Failed to get users!" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db.query(queries.getUserById, [id]);

    if (!user.rows.length) {
      return res.status(500).json({ message: "User is not found" });
    }

    res.status(200).json(user.rows[0]);
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: "Failed to get user!" });
  }
};

const addUser = async (req, res) => {
  try {
    const { firstName, lastName, age, isFree = false } = req.body;

    if (!firstName.trim() || !lastName.trim() || age <= 0) {
      return res.status(500).json({ message: "Invalid values" });
    }

    await db.query(queries.addUser, [firstName, lastName, age, isFree]);

    res.status(200).json({ message: "User added Successfully!" });
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: "Failed to add new user" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, age, isFree } = req.body;

    await db.query(queries.updateUser, [id, firstName, lastName, age, isFree]);

    res.status(200).json({ message: "User updated Successfully!" });
  } catch (err) {
    console.warn(err);
    res.status(500).json({ message: "Failed to update user!" });
  }
};

module.exports = { getUsers, getUserById, updateUser, addUser };
