import React, { useRef, Fragment, useState, useEffect } from "react";
import RichTextExample from "../wysiwyg/index";


const ContentForm = (props) => {
    //    async componentDidMount() {

    //    }
    const typeRef = useRef();
    const catIdRef = useRef();
    const titleRef = useRef();
    const subtitleRef = useRef();
    const contentRef = useRef();
    // const slugRef = useRef();
    console.log("Content Form", props);
    const handleSubmit = () => {
        const content_data = {
            "type": typeRef.current.value,
            "categoryId": catIdRef.current.value,
            "title": titleRef.current.value,
            "subtitle": subtitleRef.current.value,
            "content": contentRef.current.value
        }
        // Todo: determine if the record exists or if we are inserting a  record
        // If record has an id, method = patch. else, it's a new record and we post
        props.saveContent(content_data, method);
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


export default ContentForm;
