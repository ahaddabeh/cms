const BaseController = require("./BaseController");

class ContentController extends BaseController {
    constructor(models, model) {
        super(models, model);
        this.models = models;
    }
}

module.exports = ContentController;