import axios from "axios";

axios.interceptors.request.use((request) => requestHandler(request));
axios.interceptors.response.use((responseCallback, errorCallback));

const isHandlerEnabled = (config = {}) => {
    return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled ? false : true;
}

const requestHandler = async (config) => {
    // Add token to headers
    if (isHandlerEnabled(config)) {
        const token = localStorage.getItem("access_token")
        config.headers["x-token"] = token || "";
    }
    return config;
}

const responseCallback = async (response) => {
    console.log("Response callback", response)
    return response;
}
const errorCallback = async (error) => {
    console.log("Error callback", error)
    return error;
}

export const login = async (data, url = "http://localhost:3500/api/login") => {
    // TODO: check to make sure we have data
    if (data.email.length && data.password.length) {
        console.log("sending data to server")
        return await axios({
            handlerEnabled: false,
            method: "post",
            url,
            data,
            headers: {
                "content-type": "application/json"
            }
        })
    }
    console.log("Failed to send to server");
}


export const _fetchAll = async (url, params, method = "get") => {
    try {
        return await axios({
            method, url: `http://localhost:3500${url}`, params
        })
    } catch (error) {
        window.location.href = "http://localhost:3501/login"
        console.log("Error in fetchAll", error);
    }
}

export const _fetchOne = async (url, params = {}, method = "get") => {
    return await axios({
        method, url: `http://localhost:3500${url}`, params
    })
}

export const _delete = async (url) => {
    return await axios({
        method: "delete",
        url: `http://localhost:3500${url}`
    })
}

export const _save = async (url, data, method = "post") => {
    console.log(url, data, method);
    return await axios({
        method, url: `http://localhost:3500${url}`, data,
        headers: {
            "content-type": "application/json"
        }
    })
}






// const data = require("../../output.json");

// console.log(data.content.filter(it => it.contentTypeId === 1));

// const getContent = (type) => data.content.filter(it => it.contentTypeId === +type);

// const getPages = () => getContent(1);
// const getPage = (id) => {
//     const pagesArr = getPages();
//     for (let i = 0; i < pagesArr.length; i++) {
//         if (pagesArr[i].id === +id) {
//             return pagesArr[i];
//         }
//     }
//     return {};
// }

// const getCategories = () => getContent(2);
// const getCategory = (id) => {
//     const categoriesArr = getCategories();
//     for (let i = 0; i < categoriesArr.length; i++) {
//         if (categoriesArr[i].id === +id) {
//             return categoriesArr[i];
//         }
//     }
//     return {};
// }

// const getTags = () => getContent(3);
// const getTag = (id) => {
//     const tagsArr = getTags();
//     for (let i = 0; i < tagsArr.length; i++) {
//         if (tagsArr[i].id === +id) {
//             return tagsArr[i];
//         }
//     }
//     return {};
// }

// const users = data.users;
// // only two users so lets wait till it gets more complex and we generate more data

// // Helper function to find one user based on id passed in url
// const findUser = (user_arr, id) => {
//     for (let i = 0; i < user_arr.length; i++) {
//         if (user_arr[i].id === id)
//             return user_arr[i];
//     }
//     return {};
// }
// export const fetchAll = async (url, params, method = "get") => {
//     switch (url) {
//         case "/api/pages":
//             return getPages()
//         case "/api/categories":
//             return getCategories()
//         case "/api/tags":
//             return getTags()
//         case "/api/users":
//             return users;
//     }
// }

// export const fetchOne = async (url, params = {}, method = "get") => {
//     const tempUrl = url.split('/');
//     const id = +tempUrl[tempUrl.length - 1];
//     const singleUser = findUser(users, id);
//     switch (tempUrl[tempUrl.length - 2]) {
//         case "pages":
//             return getPage(id)
//         case "categories":
//             return getCategory(id)
//         case "tags":
//             return getTag(id)
//         case "users":
//             return singleUser
//     }
// }

