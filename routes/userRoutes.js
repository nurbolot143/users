const { Router } = require("express");

const userController = require("../controllers/userController");
const booksController = require("../controllers/booksController");

const router = new Router();

router.get("/", userController.getUsers);
router.post("/", userController.addUser);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.removeUser);

router.post("/books/:id", booksController.addUserBook);
router.delete("/books/:id", booksController.removeBookByUser);

module.exports = router;
