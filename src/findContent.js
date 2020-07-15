const path = require("path");
const fs = require("fs-extra");
const fm = require("front-matter");
const Handlebars = require("handlebars");
const db = require("./orm/models")

// Now we wanna query the database
// Pass the path or the originalUrl 



const compile = (_src, _attributes) => {
    const template = Handlebars.compile(_src); // returns a callback function
    return template(_attributes).replace(/>\s+</g, "><").trim(); // passing attributes to the callback function
}

const extractFrontMatter = (_path) => fm(fs.readFileSync(path.join(__dirname, _path), "utf8"));

const desiredContent = (_path) => {
    const splitPath = _path.split("/");
    return splitPath[splitPath.length - 1];
}



// getting and assigning the content data from the database


const findInstance = (id) => {
    for (let i = 0; i < content.length; i++) {
        if (content[i].id === id) {
            return content[i];
        }
    }
    return {};
}


const contentFinder = async (id) => {
    const content = await db.Content.findByPk(id);
    return content;
}

module.exports = (_path, _originalUrl) => {
    // We need to get a handle of the route
    console.log(_path, _originalUrl);
    const contentID = desiredContent(_originalUrl);
    const getContent = contentFinder(+contentID);
    console.log("Here's the content", getContent)
    const layout = extractFrontMatter(`./templates/layouts/default.md`);
    // Take the extracted route and query the database
    // Return the content with a status code
    return { status: 200, content: compile(layout.body, { ...layout.attributes, title: getContent.title, body: getContent.content, subtitle: getContent.subtitle, }) };
}
