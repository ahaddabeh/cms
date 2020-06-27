import React, { useRef, Fragment } from "react";

const UserForm = (props) => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const roleRef = useRef();
    const handleSubmit = () => {
        const user_data = {
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
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
            <div className="card col-9">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <div className="row mx-auto">
                        <div className="col-6">
                            <input ref={firstNameRef} type="text" />
                            <label htmlFor=""></label>
                        </div>
                        <div className="col-6">
                            <input ref={lastNameRef} type="text" />
                            <label htmlFor=""></label>
                        </div>

                    </div>
                    <input ref={emailRef} type="text" />
                    <label htmlFor=""></label>
                    <input ref={passRef} type="password" />
                    <label htmlFor=""></label>
                    <input ref={roleRef} type="text" />
                    <label htmlFor=""></label>
                </div>
            </div>

        </Fragment>
    )

}


export default UserForm;