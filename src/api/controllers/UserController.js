const BaseController = require("./BaseController");

class UserController extends BaseController {
    constructor(models, model) {
        super(models, model);
        this.models = models;
    }
}

module.exports = UserController;