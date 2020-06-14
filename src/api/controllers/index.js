const db = require("../../orm/models");

const ContentController = require("./ContentController");
const UserController = require("./UserController");
const ContentTypeController = require("./ContentTypeController");

module.exports = {
    ContentController: new ContentController(db, "Content"),
    UserController: new UserController(db, "User"),
    ContentTypeController: new ContentTypeController(db, "ContentType")
}