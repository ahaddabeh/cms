import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import routes from "./../routes";

const buildOptions = () => {
    return routes
        .filter(route => route.hasOwnProperty("navlabel") && route.navlabel !== "Home")
        .map(route => {
            return (
                <div className="col-md-4 m-3 border">
                    <h2>{route.navlabel}</h2>
                    <p>Click the button below to view {route.navlabel.toLowerCase()}</p>
                    <p><Link className="btn btn-info" to={route.path} key={route.navlabel} role="button">{route.navlabel} &raquo;</Link></p>
                </div>
            )
        })
}

const Home = () => {
    return (
        <Fragment>
            <div className="jumbotron mt-1">
                <div className="container">
                    <h1 className="display-3">Welcome Back!</h1>
                    <h4>Let's go edit some content!</h4>
                </div>
            </div>

            <div className="container">
                <div className="row d-flex justify-content-around">
                    {buildOptions()}
                    <div className="col-md-4 border">
                        <h2>Logout</h2>
                        <p>Click here to logout</p>
                        <p><Link className="btn btn-info" to="#" key="telhas" role="button">View details &raquo;</Link></p>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Home;