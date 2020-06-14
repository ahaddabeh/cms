const express = require("express");
const { ContentController } = require("../../controllers");
const router = express.Router();

// List all
router.get("/", ContentController.list);
// Retrieve one
router.get("/:id", ContentController.read);
// Update one
router.patch("/:id", ContentController.update);
// Create a new one
router.post("/", ContentController.create);
// Delete one
router.delete("/:id", ContentController.delete);

module.exports = router;