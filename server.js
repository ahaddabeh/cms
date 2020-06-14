const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const handlebars = require("express-handlebars"); // I think

require("dotenv").config();

const PORT = process.env.PORT || 3500;
const HOST = process.env.HOST || "127.0.0.1";
const app = express();

// body parser parses json and non-json requests extracting params...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
    res.send("It's working...");
})



// in the require, we are essentially pulling all the routes declared in the router
app.use("/api/users", require("./src/api/routes/private/users"));
app.use("/api/pages", require("./src/api/routes/private/pages"));
app.use("/api/categories", require("./src/api/routes/private/categories"));
app.use("/api/tags", require("./src/api/routes/private/tags"));
app.use("/api/content", require("./src/api/routes/private/content"));
app.use("/api/content-types", require("./src/api/routes/private/contentTypes"));

app.listen(PORT, HOST, () => console.log(`JSON app is running on port::http://${HOST}:${PORT}`))