import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

const Layout = (props) => {
    return (
        <Fragment>
            <div className="d-flex flex-column">
                <div className="row no-gutters min-vh-100 bg-light">
                    <div className="col-3 p-1 bg-dark text-white">
                        <h3 className="text-center">Sidebar</h3>
                        <ul className="nav flex-column border-bottom">
                            <li className="nav-item">
                                <a className="nav-link text-light" data-toggle="collapse" href="#postCollapse" aria-expanded="false"
                                    aria-controls="postCollapse">Posts <i className="fas fa-pen ml-2"></i></a>
                                <div className="collapse m-2" id="postCollapse">
                                    <ul className="nav flex-column">
                                        <li><a className="nav-link text-light" href="#">All Posts</a></li>

                                        <li><a className="nav-link text-light" href="#">Add New</a></li>

                                        <li><a className="nav-link text-light" href="#">Categories</a></li>

                                        <li><a className="nav-link text-light" href="#">Tags</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" data-toggle="collapse" href="#mediaCollapse"
                                    aria-expanded="false" aria-controls="mediaCollapse" href="#">Media <i
                                        className="fas fa-camera ml-2"></i></a>
                                <div className="collapse m-2" id="mediaCollapse">
                                    <ul className="nav flex-column">
                                        <li><a className="nav-link text-light" href="#">All Media</a></li>

                                        <li><a className="nav-link text-light" href="#">Add New</a></li>

                                        <li><a className="nav-link text-light" href="#">Categories</a></li>

                                        <li><a className="nav-link text-light" href="#">Tags</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" data-toggle="collapse" href="#pagesCollapse"
                                    aria-expanded="false" aria-controls="pagesCollapse" href="#">Pages <i
                                        className="fas fa-sticky-note ml-2"></i></a>
                                <div className="collapse m-2" id="pagesCollapse">
                                    <ul className="nav flex-column">
                                        <li><a className="nav-link text-light" href="#">All Pages</a></li>

                                        <li><a className="nav-link text-light" href="#">Add New</a></li>

                                        <li><a className="nav-link text-light" href="#">Categories</a></li>

                                        <li><a className="nav-link text-light" href="#">Tags</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" data-toggle="collapse" href="#commentsCollapse"
                                    aria-expanded="false" aria-controls="commentsCollapse" href="#">Comments <i
                                        className="fas fa-comment-alt ml-2"></i></a>
                                <div className="collapse m-2" id="commentsCollapse">
                                    <ul className="nav flex-column">
                                        <li><a className="nav-link text-light" href="#">All Comments</a></li>

                                        <li><a className="nav-link text-light" href="#">Add New</a></li>

                                        <li><a className="nav-link text-light" href="#">Categories</a></li>

                                        <li><a className="nav-link text-light" href="#">Tags</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <ul className="nav flex-column border-bottom">
                            <li className="nav-item">
                                <a className="nav-link text-light" data-toggle="collapse" href="#appearanceCollapse"
                                    aria-expanded="false" aria-controls="appearanceCollapse">Appearance<i
                                        className="fas fa-paint-brush ml-2"></i></a>
                                <div className="collapse m-2" id="appearanceCollapse">
                                    <ul className="nav flex-column">

                                        <li><a className="nav-link text-light" href="#">Add New</a></li>

                                        <li><a className="nav-link text-light" href="#">Categories</a></li>

                                        <li><a className="nav-link text-light" href="#">Tags</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" data-toggle="collapse" href="#pluginCollapse"
                                    aria-expanded="false" aria-controls="pluginCollapse" href="#">Plugin <i
                                        className="fas fa-plug ml-2"></i></a>
                                <div className="collapse m-2" id="pluginCollapse">
                                    <ul className="nav flex-column">

                                        <li><a className="nav-link text-light" href="#">Add New</a></li>

                                        <li><a className="nav-link text-light" href="#">Categories</a></li>

                                        <li><a className="nav-link text-light" href="#">Tags</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" data-toggle="collapse" href="#usersCollapse"
                                    aria-expanded="false" aria-controls="usersCollapse" href="#">Users <i
                                        className="fas fa-user ml-2"></i></a>
                                <div className="collapse m-2" id="usersCollapse">
                                    <ul className="nav flex-column">
                                        <li><a className="nav-link text-light" href="#">All Users</a></li>

                                        <li><a className="nav-link text-light" href="#">Add New</a></li>

                                        <li><a className="nav-link text-light" href="#">Categories</a></li>

                                        <li><a className="nav-link text-light" href="#">Tags</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" data-toggle="collapse" href="#toolsCollapse"
                                    aria-expanded="false" aria-controls="toolsCollapse" href="#">Tools <i
                                        className="fas fa-wrench ml-2"></i></a>
                                <div className="collapse m-2" id="toolsCollapse">
                                    <ul className="nav flex-column">
                                        <li><a className="nav-link text-light" href="#">All Tools</a></li>

                                        <li><a className="nav-link text-light" href="#">Add New</a></li>

                                        <li><a className="nav-link text-light" href="#">Categories</a></li>

                                        <li><a className="nav-link text-light" href="#">Tags</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" data-toggle="collapse" href="#settingsCollapse"
                                    aria-expanded="false" aria-controls="settingsCollapse" href="#">Settings <i
                                        className="fas fa-cogs ml-2"></i></a>
                                <div className="collapse m-2" id="settingsCollapse">
                                    <ul className="nav flex-column">
                                        <li><a className="nav-link text-light" href="#">All Settings</a></li>

                                        <li><a className="nav-link text-light" href="#">Add New</a></li>

                                        <li><a className="nav-link text-light" href="#">Categories</a></li>

                                        <li><a className="nav-link text-light" href="#">Tags</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-9">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown
                                </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
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