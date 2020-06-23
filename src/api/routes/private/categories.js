const express = require("express");
const { ContentController, CategoryController } = require("../../controllers");
const injectContentType = require("../../middleware/injectContentType");
const { CATEGORIES } = require("../../../constants");
const router = express.Router();


// List all
router.get("/", injectContentType(CATEGORIES), ContentController.list);
// Retrieve one
router.get("/:id", injectContentType(CATEGORIES), ContentController.read);
// Update one
router.patch("/:id", ContentController.update);
// Delete one
router.delete("/:id", CategoryController.delete);
// Create one
router.post("/", ContentController.create);

module.exports = router;