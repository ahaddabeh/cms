import React, { Fragment, useEffect, useState } from 'react';
import RichTextExample from "./wysiwyg/index";
const splitUrl = (url) => {
    const urlArr = url.split("/");
    const type = urlArr[urlArr.length - 2];
    return type;
}

const EditSideBar = () => {
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
            <div className="row mx-auto">
                <div className="col-8">
                    <button className="btn btn-danger btn-sm">Move to Trash</button>
                </div>
                <div className="col-4 d-flex justify-content-start">
                    <button className="btn btn-primary btn-sm">Update</button>
                </div>
            </div>
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

// This is going to be the edit page

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

const ContentDetails = (props) => {
    const [contentDetails, setContentDetails] = useState({});
    console.log(props);
    const updateContentDetails = async () => {
        const data = await props.fetchDetails(props.match.params.id);
        setContentDetails(data);
    }
    useEffect(() => {
        updateContentDetails();
    }, [props.match.params.id])

    return (
        <Fragment>
            <div className="row mx-auto">
                <div className="col-9">


                    <h1 className="my-3">{contentDetails.title}</h1>
                    <p className="text-muted mb-2"><strong>Permalink: </strong>http://10.0.1.138:8888/slate/?p=1
                                <span>
                            <button className="btn btn-light btn-sm border">Change Permalinks</button>
                            <button className="btn btn-light btn-sm border">View {props.labels.singular}</button>
                        </span>
                    </p>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-light btn-sm border"><i className="fas fa-camera ml-2"></i> Add
                                        Media</button>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <button className="btn btn-light btn-sm border">Visual</button>
                            <button className="btn btn-light btn-sm border">Text</button>
                        </div>
                    </div>
                    <div>
                        <RichTextExample initialValue={initialValue} />
                    </div>
                </div>

                {console.log(contentDetails)}

                <div className="col-3">
                    {EditSideBar()}
                </div>
            </div>
        </Fragment>
    )
}

export default ContentDetails;


//<div dangerouslySetInnerHTML={{ __html: `${contentDetails.content}` }} />