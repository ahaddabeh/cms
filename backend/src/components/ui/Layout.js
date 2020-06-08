import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import routes from "../../routes";

const buildNavBarItems = () => {

}

const buildSideBarItems = () => {
    return routes
        .filter(route => route.hasOwnProperty("navlabel"))
        .map(route => {
            return (
                <li className="nav-item">
                    <NavLink className="nav-link text-light" data-toggle="collapse" key={route.navlabel} to={route.path} aria-expanded="false"
                        aria-controls="postCollapse">{route.navlabel}</NavLink>
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
                            <a className="navbar-brand" to="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="#">Home <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="#">Link</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown
                                </NavLink>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" to="#">Action</a>
                                            <a className="dropdown-item" to="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" to="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
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