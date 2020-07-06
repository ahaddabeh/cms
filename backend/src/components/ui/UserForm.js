import React, { useRef, Fragment } from "react";

const inputWidthStyle = {
    width: "60%"
}

const UserForm = (props) => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const roleRef = useRef();
    const handleSubmit = () => {
        const user_data = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passRef.current.value,
            role: roleRef.current.value
        }
        props.saveUser(user_data);
        console.log(user_data);
    }

    // const resetForm = () => {
    // }

    return (
        <Fragment>
            <div className="p-1">
                <div className="row wrapper border-bottom white-bg page-heading m-4">
                    <h2>Create New User</h2>
                </div>
                <div className="row mx-auto">
                    <div className="col-9">
                        <div className="card">
                            <div className="card-header bg-info">
                                <div className="mx-auto text-light">
                                    <h4>Enter User Information</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row ">
                                    <div className="col border border-right-light">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputFirstName1">First Name:</label>
                                            <input className="form-control" type="text" style={inputWidthStyle} name="exampleInputFirstName1"
                                                id="exampleInputFirstName1" ref={firstNameRef} placeholder="Enter first name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputLastName1">Last Name:</label>
                                            <input className="form-control" type="text" style={inputWidthStyle} name="exampleInputLastName1"
                                                id="exampleInputLastName1" ref={lastNameRef} placeholder="Enter last name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email
                                                    Address:</label>
                                            <input className="form-control" type="email" style={inputWidthStyle} name="exampleInputEmail1"
                                                id="exampleInputEmail1" ref={emailRef} placeholder="Enter email" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Password:</label>
                                            <input className="form-control" type="password" style={inputWidthStyle} name="exampleInputPassword1"
                                                id="exampleInputPassword1" ref={passRef} placeholder="Enter password" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputRole1">Role:</label>
                                            <input className="form-control" type="text" style={inputWidthStyle} name="exampleInputRole1"
                                                id="exampleInputRole1" ref={roleRef} placeholder="Enter Role" />
                                        </div>
                                        <button className="btn btn-primary" onClick={handleSubmit}>Add User</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}


export default UserForm;