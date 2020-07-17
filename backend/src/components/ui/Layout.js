import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import routes from "../../routes";
import "../../../assets/sidebar.css"

const NavAndSideBgColor = {
    // background: "#20B2AA"
    background: "#0000CD"

}

const buildNavBarItems = () => {
    return routes
        .filter(route => route.hasOwnProperty("navlabel"))
        .map(route => {
            return (
                <li className="nav-item">
                    <NavLink className="nav-link text-light" key={route.navlabel} to={route.path} aria-expanded="false"
                    >{route.navlabel} <i className={route.icon}></i></NavLink>
                </li>
            )
        })
}

const buildSideBarItems = () => {
    return routes
        .filter(route => route.hasOwnProperty("navlabel"))
        .map(route => {
            return (
                <li className="nav-item list-group-item" style={NavAndSideBgColor}>
                    <NavLink className="nav-link text-light" key={route.navlabel} to={route.path} aria-expanded="false"
                    >{route.navlabel} <i className={route.icon}></i></NavLink>
                </li>
            )
        })
}


const Layout = (props) => {
    return (
        <Fragment>
            <div className="d-flex flex-column">
                <div className="row no-gutters min-vh-100 bg-light">
                    <div className="col-3 p-1 text-white" style={NavAndSideBgColor}>
                        <h3 className="text-center">CMS <i className="fas fa-wrench"></i></h3>
                        <ul className="nav flex-column p-3">
                            {buildSideBarItems()}
                            <li className="nav-item list-group-item" style={NavAndSideBgColor}>
                                <NavLink className="nav-link text-light" key="logout_logout_" to="#" aria-expanded="false"
                                >Logout <i className="fas fa-sign-out-alt"></i></NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-9">
                        <nav className="navbar navbar-expand-lg navbar-dark" style={NavAndSideBgColor}>
                            <a className="navbar-brand" to="#">Welcome Admin <i className="fas fa-user-cog"></i></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    {buildNavBarItems()}
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-light" key="logout_logout_" to="#" aria-expanded="false"
                                        >Logout <i className="fas fa-sign-out-alt"></i></NavLink>
                                    </li>                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search <i className="fas fa-search"></i></button>
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