const db = require("../../orm/models");

module.exports = {
    async deleteCategory(id) {
        const content = await db.Content.findAll({
            where: {
                categoryId: id
            }
        })

        if (content.length) {
            return content.length;
        }
        else {
            await db.content.destroy({
                where: {
                    id: id
                }
            })
            return 0;
        }
    }
}