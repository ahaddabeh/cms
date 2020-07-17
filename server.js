const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// destructuring and renaming render to findContent
const { render: findContent } = require("./src/findContent");

require("dotenv").config();

const PORT = process.env.PORT || 3500;
const HOST = process.env.HOST || "127.0.0.1";
const app = express();

app.use(express.static(path.join(__dirname, "public")))

// body parser parses json and non-json requests extracting params...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// Authentication middleware will go here
// app.use((req, res, next) => {
//     console.log("Authenticated routes");
//     next();
// })
// in the require, we are essentially pulling all the routes declared in the router
app.use("/api/users", require("./src/api/routes/private/users"));
app.use("/api/pages", require("./src/api/routes/private/pages"));
app.use("/api/categories", require("./src/api/routes/private/categories"));
app.use("/api/tags", require("./src/api/routes/private/tags"));
app.use("/api/content", require("./src/api/routes/private/content"));
app.use("/api/content-types", require("./src/api/routes/private/contentTypes"));
app.use("/api/render-preview", require("./src/api/routes/private/preview"));

function ignoreFavicon(req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
        res.status(204).json({ nope: true });
    } else {
        next();
    }
}
app.use(ignoreFavicon);



app.get("*", async (req, res) => {
    const result = await findContent(req.path, req.originalUrl);
    console.log("Server result", result);
    res.status(result.status).send(result.content);
})


app.listen(PORT, HOST, () => console.log(`JSON app is running on port::http://${HOST}:${PORT}`))

