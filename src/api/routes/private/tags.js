const express = require("express");
const { ContentController } = require("../../controllers");
const injectContentType = require("../../middleware/injectContentType");
const { TAGS } = require("../../../constants");
const router = express.Router();

// List all
router.get("/", injectContentType(TAGS), ContentController.list);
// Retrieve one
router.get("/:id", injectContentType(TAGS), ContentController.read);
// Update one
router.patch("/:id", injectContentType(TAGS), ContentController.update);
// Delete one
router.delete("/:id", injectContentType(TAGS), ContentController.delete);
// Create one
router.post("/", injectContentType(TAGS), ContentController.list);

module.exports = router;