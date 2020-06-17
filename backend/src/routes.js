import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
import ContentType from "./components/ContentType";
import ContentDetails from "./components/ContentDetails";
import Content from "./components/Content";
import NoMatch from "./components/ui/NoMatch";
import ContentForm from "./components/ui/ContentForm";
import UserForm from "./components/ui/UserForm";
import {
    _fetchAll,
    _fetchOne,
    save,
    _delete
} from "./api";

const routes = [
    {
        path: "/",
        exact: true,
        component: Home,
        navlabel: "Home",
        navorder: 0
    },
    {
        path: "/pages",
        exact: true,
        component: Content,
        labels: { plural: "Pages", singular: "Page" },
        navlabel: "Pages",
        navorder: 1,
        fetchContent: async (params = {}) => await _fetchAll("/api/pages", params),
        deleteContent: async (id) => await _delete(`/api/pages/${id}`)
    },
    {
        path: "/categories",
        exact: true,
        component: Content,
        labels: { plural: "Categories", singular: "Category" },
        navlabel: "Categories",
        navorder: 2,
        fetchContent: async (params = {}) => await _fetchAll("/api/categories", params)
    },
    {
        path: "/tags",
        exact: true,
        component: Content,
        labels: { plural: "Tags", singular: "Tag" },
        navlabel: "Tags",
        navorder: 3,
        fetchContent: async (params = {}) => await _fetchAll("/api/tags", params)
    },
    {
        path: "/users",
        exact: true,
        component: Users,
        navlabel: "Users",
        navorder: 4,
        fetchUsers: async (params = {}) => await _fetchAll("/api/users", params)
    },
    {
        path: ["/page", "/page/:id"],
        exact: true,
        component: ContentForm,
        saveContent: async (data, method = "post") => await _save("/api/pages", data, method),
        fetchDetails: async (id) => await _fetchOne(`/api/pages/${id}`)
    },
    {
        path: ["/category", "/category/:id"],
        exact: true,
        component: ContentForm,
        saveContent: async (data, method = "post") => await _save("/api/categories", data, method),
        fetchDetails: async (id) => await _fetchOne(`/api/categories/${id}`)
    },
    {
        path: ["/tag", "/tag/:id"],
        exact: true,
        component: ContentForm,
        saveContent: async (data, method = "post") => await _save("/api/tags", data, method),
        fetchDetails: async (id) => await _fetchOne(`/api/tags/${id}`)
    },
    {
        path: ["/user", "/user/:id"],
        exact: true,
        component: UserForm,
        saveUser: async (data, method = "post") => await _save("/api/users", data, method),
        fetchDetails: async (id) => await _fetchOne(`/api/users/${id}`)
    },

]

export default routes;