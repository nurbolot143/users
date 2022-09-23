const { Router } = require("express");

const userController = require("../controllers/userController");

const router = new Router();

router.get("/", userController.getUsers);
router.post("/", userController.addUser);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);

module.exports = router;
