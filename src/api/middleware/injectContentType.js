module.exports = (type) => {
    return (req, res, next) => {
        req.options = {
            where: {
                contentTypeId: type
            }
        }
        next();
    }
}