import React, { useRef, Fragment } from "react";

const UserForm = (props) => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = () => {
        const content_data = {
            "type": typeRef.current.value,
            "categoryId": catIdRef.current.value,
            "title": titleRef.current.value,
            "subtitle": subtitleRef.current.value,
            "content": contentRef.current.value
        }
        props.saveContent(content_data);
        console.log(content_data);
    }

    const resetForm = () => {
        typeRef.current.value = "";
        catIdRef.current.value = "";
        titleRef.current.value = "";
        subtitleRef.current.value = "";
        contentRef.current.value = "";
    }

    return (
        <Fragment>
            <div className="card">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </Fragment>
    )

}


export default UserForm;