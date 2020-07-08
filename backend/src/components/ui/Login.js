import React from "react";

const Login = () => {
    return (
        <div className="row mx-auto">

            <div className="col"></div>
            <div className="col align-middle">
                <div className="card-body border bg-light">

                    <h3 style="text-align:center;">Sign in</h3>

                    <div>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" style="width: 50%" className="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" style="width: 50%" className="form-control" id="exampleInputPassword1"
                            placeholder="Enter your password" />
                        <small><a href="#">Forgot password?</a></small>
                    </div>
                    <div className="d-flex justify-content-center">

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </div>
                </div>
            </div>
            <div className="col"></div>
        </div>
    )
}