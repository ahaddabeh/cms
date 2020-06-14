const BaseController = require("./BaseController");

class ContentTypeController extends BaseController {
    constructor(models, model) {
        super(models, model);
        this.models = models;
    }
}

module.exports = ContentTypeController;