import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import routes from "../../routes";

const buildNavBarItems = () => {
    return routes
        .filter(route => route.hasOwnProperty("navlabel"))
        .map(route => {
            return (
                <li className="nav-item">
                    <NavLink className="nav-link text-light" key={route.navlabel} to={route.path} aria-expanded="false"
                    >{route.navlabel}</NavLink>
                </li>
            )
        })
}

const buildSideBarItems = () => {
    return routes
        .filter(route => route.hasOwnProperty("navlabel"))
        .map(route => {
            return (
                <li className="nav-item list-group-item bg-dark">
                    <NavLink className="nav-link text-light" key={route.navlabel} to={route.path} aria-expanded="false"
                    >{route.navlabel}</NavLink>
                </li>
            )
        })
}


const Layout = (props) => {
    return (
        <Fragment>
            <div className="d-flex flex-column">
                <div className="row no-gutters min-vh-100 bg-light">
                    <div className="col-3 p-1 bg-dark text-white">
                        <h3 className="text-center">Sidebar</h3>
                        <ul className="nav flex-column border-bottom">
                            {buildSideBarItems()}
                        </ul>
                    </div>
                    <div className="col-9">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <a className="navbar-brand" to="#"><i className="fas fa-user-cog"></i> Welcome Admin</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    {buildNavBarItems()}                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>
                        {props.children}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Layout;