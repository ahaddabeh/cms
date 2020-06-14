module.exports = (type) => {
    return (req, res, next) => {
        req.options.where = {
            ...req.options.where,
            contentType: type
        }
    }
}