const express = require("express");
const router = express.Router();
const { preview: findContent } = require("../../../findContent");

router.get("/", async (req, res) => {
    const result = await findContent(req.body);
    console.log("Server result", result);
    res.status(result.status).send(result);
})


module.exports = router;