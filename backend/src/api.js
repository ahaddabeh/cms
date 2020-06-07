const data = require("../../output.json");

console.log(data.content.filter(it => it.contentTypeId === 1));

const getContent = (type) => data.content.filter(it => it.contentTypeId === +type);
const getPages = () => getContent(1);
const getPage = (id) => getPages.filter(page => page.id === +id)
const getCategories = () => getContent(2);
const getCategory = (id) => getCategories.filter(category => category.id === +id);
const getTags = () => getContent(3);
const getTag = (id) => getTags.filter(tag => tag.id === +id);

const users = data.users;
// only two users so lets wait till it gets more complex and we generate more data

// Helper function to find one user based on id passed in url
const findUser = (user_arr, id) => {
    for (let i = 0; i < user_arr.length; i++) {
        if (user_arr[i].id === id)
            return user_arr[i];
    }
    return {};
}
export const fetchAll = async (url, params, method = "get") => {
    switch (url) {
        case "/api/pages":
            return getPages()
        case "/api/categories":
            return getCategories()
        case "/api/tags":
            return getTags()
        case "/api/users":
            return users;
    }
}

export const fetchOne = async (url, params = {}, method = "get") => {
    const tempUrl = url.split('/');
    const id = +tempUrl[tempUrl.length - 1];
    const singleUser = findUser(users, id);
    switch (tempUrl[tempUrl.length - 2]) {
        case "pages":
            return getPage()
        case "categories":
            return getCategory()
        case "tags":
            return getTag()
        case "users":
            return singleUser
    }
}

