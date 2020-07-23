const express = require("express");
const router = express.Router();
const { UserController } = require("../../controllers");

router.post("/", UserController.loginUser);

module.exports = router;