const express = require("express");
const { ContentTypeController } = require("../../controllers")
const router = express.Router();

router.get("/", ContentTypeController.list);
router.get("/:id", ContentTypeController.read);
router.patch("/:id", ContentTypeController.update);
router.post("/", ContentTypeController.create);
router.delete("/:id", ContentTypeController.delete);


module.exports = router