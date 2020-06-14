const express = require("express");
const { ContentController } = require("../../controllers");
const injectContentType = require("../../middleware/injectContentType");
const { CATEGORIES } = require("../../../constants");
const router = express.Router();


// List all
router.get("/", injectContentType(CATEGORIES), ContentController.list);
// Retrieve one
router.get("/:id", injectContentType(CATEGORIES), ContentController.read);
// Update one
router.patch("/:id", injectContentType(CATEGORIES), ContentController.update);
// Delete one
router.delete("/:id", injectContentType(CATEGORIES), ContentController.delete);
// Create one
router.post("/", injectContentType(CATEGORIES), ContentController.list);

module.exports = router;