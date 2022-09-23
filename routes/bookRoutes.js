const { Router } = require("express");

const bookController = require("../controllers/bookController");

const router = new Router();

router.get("/", bookController.getBooks);
router.post("/", bookController.addBook);
router.get("/:id", bookController.getBookById);
router.delete("/:id", bookController.removeBook);
router.put("/:id", bookController.updateBook);

module.exports = router;
