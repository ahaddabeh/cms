class BaseController {
    constructor(_models, _model) {
        this.model = _models[_model];
    }

    _findAndCountAll = async (req, res) => {
        const { page = 1, size = 25, sort = "createdAt", order = "DESC", ..._where } = req.query
        const { where = null, include = null, ..._options } = req.options || {}
        const options = {
            where: { ...where, ..._where },
            include,
            order: [[sort, order]],
            limit: size,
            offset: size * (page - 1),
            ..._options
        }
        return await this.model.findAndCountAll(options);
    }

    _create = async (req, res) => {
        try {
            return { status: 200, result: await this.model.create({ ...req.body }) };
        } catch (error) {
            console.log(error)
            return { status: 404, result: "Can't post" };
        }
    }

    _findByPk = async (req, res) => {
        const { where = null, include = null, ..._options } = req.options || {}
        const options = { where, include, ..._options };
        console.log(options)
        return await this.model.findByPk(req.params.id, options);
    }

    _destroy = async (req, res) => {
        try {
            const { where = null, ..._options } = req.options || {}
            const options = { where: { ...where, id: req.params.id }, ..._options };
            return { status: 200, result: await this.model.destroy(options) }
        } catch (error) {
            console.log(error);
            return { status: 404, result: "Not found" };
        }
    }

    _update = async (req, res) => {
        try {
            const { where = null, ..._options } = req.options || {}
            const options = { where: { ...where, id: req.params.id }, ..._options };
            return { status: 200, result: await this.model.update({ ...req.body }, options) };
        } catch (error) {
            console.log(error)
            return { status: 404, result: "Can't post" };
        }
    }

    create = async (req, res) => {
        const result = await this._create(req, res);
        await res.status(result.status).send(result.result);
    }

    read = async (req, res) => {
        const result = await this._findByPk(req, res);
        await res.status(200).send(result);
    }

    list = async (req, res) => {
        const result = await this._findAndCountAll(req, res);
        await res.status(200).send(result);
    }

    update = async (req, res) => {
        const result = await this._update(req, res);
        await res.status(result.status).send(result.result);
    }

    delete = async (req, res) => {
        const result = await this._destroy(req, res);
        await res.status(result.status).send(result.result);
    }

}


module.exports = BaseController;