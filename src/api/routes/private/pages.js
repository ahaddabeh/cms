const express = require("express");
const { ContentController } = require("../..controllers");
const injectContentType = require("../../middleware/injectContentType");
const { PAGES } = require("../../../constants");
const router = express.Router();

// List all
router.get("/", injectContentType(PAGES), ContentController.list);
// Retrieve one
router.get("/:id", injectContentType(PAGES), ContentController.read);
// Update one
router.patch("/:id", injectContentType(PAGES), ContentController.update);
// Delete one
router.delete("/:id", injectContentType(PAGES), ContentController.delete);
// Create one
router.post("/", injectContentType(PAGES), ContentController.list);

module.exports = router;