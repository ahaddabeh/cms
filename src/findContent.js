const path = require("path");
const fs = require("fs-extra");
const fm = require("front-matter");

const extractFrontMatter = (_path) => fm(fs.readFileSync(path.join(__dirname, _path), "utf8"));

module.exports = (_path, _originalUrl) => {
    // We need to get a handle of the route
    console.log(_path, _originalUrl);
    const layout = extractFrontMatter("./templates/layouts/default.md");
    console.log(layout);
    // Take the extracted route and query the database
    // Return the content with a status code
    return { status: 200, content: layout.body };
}
