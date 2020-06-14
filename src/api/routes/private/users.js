const express = require("express");
const { UserController } = require("../../controllers");
const router = express.Router();

// List all
router.get("/", UserController.list);
// Retrieve one
router.get("/:id", UserController.read);
// Update one
router.patch("/:id", UserController.update);
// Create a new one
router.post("/", UserController.create);
// Delete one
router.delete("/:id", UserController.delete);

module.exports = router;