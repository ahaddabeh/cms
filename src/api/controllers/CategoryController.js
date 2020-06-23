const BaseController = require("./BaseController");
const CategoryService = require("../services/CategoryService")

class CategoryController extends BaseController {
    constructor(models, model) {
        super(models, model);
        this.models = models;
    }

    // Overriding BaseController delete
    delete = async (req, res) => {
        console.log(req.params);
        const result = await this.deleteCategory(+req.params.id);
        if (result > 0) {
            res.status(403).send({ message: "Content with category id exists" })
        }
        else {
            res.status(200).send({ message: "Category successfully deleted" })
        }
    }
}

Object.assign(CategoryController.prototype, CategoryService)

module.exports = CategoryController;