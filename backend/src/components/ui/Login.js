import React, { useRef, Fragment } from "react";
import "../../../assets/login.css"
const Login = (props) => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        const result = await props.login(data);
        if (result.data.access_token.length) {
            localStorage.setItem("access_token", result.data.access_token);
            console.log("Access token:", result.data.access_token);
            window.location.href = "http://localhost:3501/";
        }
    }


    return (
        <Fragment>
            <form className="form-signin">

                <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" ref={emailRef} className="form-control" placeholder="Email address" required autoFocus />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" ref={passwordRef} placeholder="Password" required />
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
            </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" onClick={handleSubmit}>Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
            </form>
        </Fragment>
    )
}

export default Login;