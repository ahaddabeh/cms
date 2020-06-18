import React, { useRef, Fragment, useState, useEffect } from "react";
import RichTextExample from "../wysiwyg/index";

const initialValue = [
    {
        type: 'paragraph',
        children: [
            { text: 'This is editable ' },
            { text: 'rich', bold: true },
            { text: ' text, ' },
            { text: 'much', italic: true },
            { text: ' better than a ' },
            { text: '<textarea>', code: true },
            { text: '!' },
        ],
    },
    {
        type: 'paragraph',
        children: [
            {
                text:
                    "Since it's rich text, you can do things like turn a selection of text ",
            },
            { text: 'bold', bold: true },
            {
                text:
                    ', or add a semantically rendered block quote in the middle of the page, like this:',
            },
        ],
    },
    {
        type: 'block-quote',
        children: [{ text: 'A wise quote.' }],
    },
    {
        type: 'paragraph',
        children: [{ text: 'Try it out for yourself!' }],
    },
]

const determineType = (url) => {
    if (url.includes("page")) {
        return 1;
    }
    else if (url.includes("category")) {
        return 2;
    }
    else if (url.includes("tag")) {
        return 3;
    }
    return 0;
}

const ContentForm = (props) => {
    console.log("These are the props", props);

    const typeRef = useRef();
    const titleRef = useRef();
    const subtitleRef = useRef();
    const contentRef = useRef();
    // const catIdRef = useRef();
    // const slugRef = useRef();

    console.log("Content Form");

    const handleSubmit = () => {
        const content_data = {
            "type": determineType(props.match.url),
            // "categoryId": catIdRef.current.value,
            "title": titleRef.current.value,
            "subtitle": subtitleRef.current.value,
            "content": contentRef.current.value
        }

        // Todo: determine if the record exists or if we are inserting a  record
        // If record has an id, method = patch. else, it's a new record and we post
        // if(props.match.path.contains("id")){
        //     props.saveContent(content_data, patch);
        // }
        // else {
        //     props.saveContent(content_data, post);
        // }
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
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" ref={titleRef} className="form-control" id="title" aria-describedby="titleHelp" placeholder="Enter title" />
                            <small id="titleHelp" className="form-text text-muted">This is required</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subitle">Subtitle</label>
                            <input type="text" ref={subtitleRef} className="form-control" id="subitle" aria-describedby="subtitleHelp" placeholder="Enter subtitle" />
                            <small id="subtitleHelp" className="form-text text-muted">This is optional</small>
                        </div>
                        <div className="form-group">
                            {/* Wysiwyg is being a nuisance */}
                            <RichTextExample initialValue={initialValue} />
                        </div>
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )

}


export default ContentForm;
