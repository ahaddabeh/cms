const data = require("../output.json");

console.log(data.content.filter(it => it.contentTypeId === 1));

const getContent = (type) => data.content.filter(it => it.contentTypeId === +type);
const getPages = () => getContent(1);
const getPage = (id) => getPages.filter(page => page.id === +id)
const getCategories = () => getContent(2);
const getPage = (id) => getPages.filter(page => page.id === +id)

const getTags = () => getContent(3);

export const fetchAll = async (url, params, method = "get") => {
    switch (url) {
        case "/api/pages":
            return getPages()
        case "/api/categories":
            return getCategories()
        case "/api/tags":
            return getTags()
    }
}
