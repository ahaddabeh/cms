import React, { useRef, Fragment, useState, useEffect } from "react";
import RichTextExample from "../wysiwyg/index";

const EditSideBar = (content) => {
    return (<div className="card">
        <div className="card-body border">
            <div className="row mx-auto">
                <div className="col">
                    <h5 className="card-title">Publish</h5>
                </div>
                <div className="col"><i className="fas fa-sort-up float-right"></i></div>
            </div>
            <div className="row mx-auto">
                <div className="col-8"></div>
                <div className="col-4"><button className="btn btn-light btn-sm border mb-2">Preview
                                            </button>
                </div>
            </div>

            <p className="card-text"><i className="fas fa-map-pin mr-2 text-muted"></i>
                <span className="text-muted">Status:</span>
                                        Published <a href="#"><small><u>Edit</u></small></a></p>
            <p className="card-text"><i className="fas fa-eye mr-2 text-muted"></i>
                <span className="text-muted">Visibility:</span>
                                        Public <a href="#"><small><u>Edit</u></small></a></p>
            <p className="card-text"><i className="fas fa-redo-alt mr-2 text-muted"></i>
                <span className="text-muted">Revisions:</span>
                                        4 <a href="#"><small><u>Browse</u></small></a></p>
            <p className="card-text"><i className="fas fa-calendar-alt mr-2 text-muted"></i>
                <span className="text-muted">Published On:</span>
                                        August 9, 2014 @ 16:44 <a href="#"><small><u>Edit</u></small></a></p>

        </div>
        <div className="card-body border">
            <div className="row mx-auto">
                <div className="col">
                    <h5 className="card-title">Format</h5>
                </div>
                <div className="col"><i className="fas fa-sort-up float-right"></i></div>
            </div>
            <div className="custom-control custom-radio">
                <input type="radio" id="customRadio1" name="customRadio"
                    className="custom-control-input" />
                <label className="custom-control-label text-muted" htmlFor="customRadio1"><i
                    className="fas fa-thumbtack mr-1"></i>Standard</label>
            </div>
            <div className="custom-control custom-radio">
                <input type="radio" id="customRadio2" name="customRadio"
                    className="custom-control-input" />
                <label className="custom-control-label text-muted" htmlFor="customRadio2"><i
                    className="fas fa-newspaper mr-1"></i>Aside</label>
            </div>
            <div className="custom-control custom-radio">
                <input type="radio" id="customRadio3" name="customRadio"
                    className="custom-control-input" />
                <label className="custom-control-label text-muted" htmlFor="customRadio3"><i
                    className="fas fa-images mr-1"></i>Image</label>
            </div>
            <div className="custom-control custom-radio">
                <input type="radio" id="customRadio4" name="customRadio"
                    className="custom-control-input" />
                <label className="custom-control-label text-muted" htmlFor="customRadio4"><i
                    className="fas fa-link mr-1"></i>Link</label>
            </div>
            <div className="custom-control custom-radio">
                <input type="radio" id="customRadio5" name="customRadio"
                    className="custom-control-input" />
                <label className="custom-control-label text-muted" htmlFor="customRadio5"><i
                    className="fas fa-quote-right mr-1"></i>Quote</label>
            </div>
            <div className="custom-control custom-radio">
                <input type="radio" id="customRadio6" name="customRadio"
                    className="custom-control-input" />
                <label className="custom-control-label text-muted" htmlFor="customRadio6"><i
                    className="fas fa-comment-dots mr-1"></i>Status</label>
            </div>
        </div>
        <div className="card-body border">
            <div className="row mx-auto">
                <div className="col-8">
                    <h5 className="card-title">Categories</h5>
                </div>
                <div className="col-4"><i className="fas fa-sort-up float-right"></i></div>
            </div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="#"><small>All Categories</small></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><small>Most Used</small></a>
                </li>
            </ul>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                    Uncategorized
                                        </label>
            </div>
            <a href="#"><u>+Add New Category</u></a>
        </div>
    </div>)
}

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
        type: 'image',
        url: 'https://source.unsplash.com/kFrdX5IeQzI',
        children: [{ text: '' }],
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

    // const typeRef = useRef();
    const titleRef = useRef();
    const subtitleRef = useRef();
    // const contentRef = React.createRef();
    // const catIdRef = useRef();
    // const slugRef = useRef();

    console.log("Content Form");

    const handleSubmit = () => {
        const content_data = {
            type: determineType(props.match.url),
            title: titleRef.current.value,
            subtitle: subtitleRef.current.value,
        }

        // Todo: determine if the record exists or if we are inserting a  record
        // If record has an id, method = patch. else, it's a new record and we post
        // if(props.match.path.includes("id")){
        //     props.saveContent(content_data, patch);
        // }
        // else {
        //     props.saveContent(content_data, post);
        // }
        console.log("This is content data: ", content_data);

    }

    const resetForm = () => {
        typeRef.current.value = "";
        catIdRef.current.value = "";
        titleRef.current.value = "";
        subtitleRef.current.value = "";
        contentRef.current.value = "";
    }

    const [contentForm, setContentForm] = useState({});
    console.log(props);
    const updateContentForm = async () => {
        const data = await props.fetchDetails(props.match.params.id);
        console.log("This is content details", data);
        setContentForm(data.data);
    }
    useEffect(() => {
        updateContentForm();
    }, [props.match.params.id])
    if (props.match.params.id) {
        return (
            <Fragment>
                <div className="row mx-auto">
                    <div className="col-9">
                        <div className="card">
                            <div className="card-header">
                                Featured
                </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input type="text" ref={titleRef} className="form-control" id="title" aria-describedby="titleHelp" defaultValue={contentForm.title} placeholder="Enter title" />
                                        <small id="titleHelp" className="form-text text-muted">This is required</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subitle">Subtitle</label>
                                        <input type="text" ref={subtitleRef} className="form-control" id="subitle" aria-describedby="subtitleHelp" defaultValue={contentForm.subtitle} placeholder="Enter subtitle" />
                                        <small id="subtitleHelp" className="form-text text-muted">This is optional</small>
                                    </div>
                                    <div className="form-group">
                                        {/* Wysiwyg is being a nuisance */}
                                        <RichTextExample initialValue={initialValue} />
                                    </div>

                                    <div className="row mx-auto">
                                        <div className="col-6">
                                            <button type="button" onClick={handleSubmit} className="btn btn-primary">Update</button>
                                        </div>
                                        <div className="col-6 d-flex justify-content-end">
                                            {/* <button className="btn btn-danger" onClick={props.deleteContent(contentForm.id)}>Delete</button> */}
                                            <button className="btn btn-danger" onClick={() => { console.log("Deleting this data: ", contentForm) }}>Delete</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <EditSideBar />
                    </div>
                </div>
            </Fragment>
        )
    }
    else {
        return (
            <Fragment>
                <div className="row mx-auto">
                    <div className="col-9">
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
                                    <button type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <EditSideBar />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ContentForm;
