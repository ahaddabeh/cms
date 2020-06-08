import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
import ContentType from "./components/ContentType";
import ContentDetails from "./components/ContentDetails";
import Content from "./components/Content";
import NoMatch from "./components/ui/NoMatch";
import {
    fetchAll,
    fetchOne
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
        navlabel: "Pages",
        navorder: 1,
        fetchContent: async (params = {}) => await fetchAll("/api/pages", params)
    },
    {
        path: "/categories",
        exact: true,
        component: Content,
        navlabel: "Categories",
        navorder: 2,
        fetchContent: async (params = {}) => await fetchAll("/api/categories", params)
    },
    {
        path: "/tags",
        exact: true,
        component: Content,
        navlabel: "Tags",
        navorder: 3,
        fetchContent: async (params = {}) => await fetchAll("/api/tags", params)
    },
    {
        path: "/users",
        exact: true,
        component: Users,
        navlabel: "Users",
        navorder: 4,
        fetchUsers: async (params = {}) => await fetchAll("/api/users", params)
    },
    {
        path: "/pages/:id",
        exact: true,
        component: ContentDetails,
        fetchPage: async (id) => await fetchOne(`/api/pages/${id}`)
    },
    {
        path: "/categories/:id",
        exact: true,
        component: ContentDetails,
        fetchCategory: async (id) => await fetchOne(`/api/categories/${id}`)
    },
    {
        path: "/tags/:id",
        exact: true,
        component: ContentDetails,
        fetchTag: async (id) => await fetchOne(`/api/tags/${id}`)
    },
    {
        path: "/users/:id",
        exact: true,
        component: User,
        fetchUser: async (id) => await fetchOne(`/api/users/${id}`)
    }
]

export default routes;