const express = requrie("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const handlebars = require("express-handlebars"); // I think
require("dotenv").config();

const PORT = process.env.PORT || 3500;

const app = express();

// body parser parses json and non-json requests extracting params...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
    res.send("It's working...");
})

app.use("/api/users", require("./src/api/routes/private/users"));

// Ask about this because it's not gonna be /api/content it would be either pages, categories, or tags rather than content and i dont know where to get that from
// app.use("/api/content", require("./src/api/routes/private/content"));

app.listen(PORT, () => console.log(`JSON app is running on port::${PORT}`))