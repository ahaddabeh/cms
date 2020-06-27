import React, { useRef, Fragment, useState, useEffect } from "react";
// import Html from "slate-html-serializer";

import { convertToRaw, convertFromRaw, EditorState } from "draft-js";




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
                <div className="col-4">


                </div>
            </div>

            <p className="card-text"><i className="fas fa-map-pin mr-2 text-muted"></i>
                <span className="text-muted">Status:</span>
                UDFN {content.status}</p>
            <p className="card-text"><i className="fas fa-eye mr-2 text-muted"></i>
                <span className="text-muted">Visibility:</span>
                {content.visibility} <a href="#"><small><u>Edit</u></small></a></p>
            <p className="card-text"><i className="fas fa-redo-alt mr-2 text-muted"></i>
                <span className="text-muted">Revisions:</span>
                                        4 <a href="#"><small><u>Browse</u></small></a></p>
            <p className="card-text"><i className="fas fa-calendar-alt mr-2 text-muted"></i>
                <span className="text-muted">Published On:</span>
                {content.publishedOn}
                {console.log("Content in the edit sidebar function", content)}
                {/* <a href="#"><small><u>Edit</u></small></a> */}
            </p>

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

    // const [value, setValue] = useState(initialValue);


    const editor = useRef(null);






    const titleRef = useRef();
    const subtitleRef = useRef();
    // const contentRef = useRef();
    // const catIdRef = useRef();
    // const slugRef = useRef();

    console.log("Content Form");


    // const handleEditorChange = (value) => {

    //     console.log(Html.serialize(value));
    // }


    const handleSubmit = async (contentId) => {
        const content_data = {
            contentTypeId: props.labels.type,
            title: titleRef.current.value,
            subtitle: subtitleRef.current.value,
            createdBy: 1,
            updatedBy: 1,
            directory: `/${props.labels.plural.toLowerCase()}`,
            content: "<p>Reiciendis cumque voluptatem quia rerum recusandae maxime quaerat minus. Harum sed est facilis non voluptatem molestiae. Expedita fuga eos autem et repellendus modi voluptas. Alias et voluptatem dolorum quis deserunt. Voluptatum a praesentium assumenda quo. Ut voluptate qui temporibus quasi autem veniam saepe quaerat laboriosam. Ut est et rerum quisquam est quia. Eaque quia dolorem perferendis autem esse animi iste animi.</p><ul><li>non eum voluptas voluptatibus eum quia animi repellendus</li></ul><p>Harum dolorem dolor quas voluptatem aut voluptas voluptatibus. Ut eum maxime sunt similique ab dolor. Delectus distinctio pariatur hic veritatis aut eum qui molestiae vero. Voluptatem error amet eum et minima. Officia quis praesentium provident excepturi non maxime. Dignissimos velit in mollitia quis accusantium ut nihil odit. Velit sunt exercitationem.</p>",
            categoryId: 0
        }

        // Todo: determine if the record exists or if we are inserting a  record
        // If record has an id, method = patch. else, it's a new record and we post
        // if (contentId && contentId > 0) {
        //     console.log("We should be patching");
        //     await props.saveContent({ ...content_data, id: contentId }, "patch");
        // }
        // else {
        //     await props.saveContent(content_data);
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
        console.log(props.match.params);
        if (props.match.params.id) {
            const data = await props.fetchDetails(props.match.params.id);
            setContentForm(data.data);
        }
    }
    useEffect(() => {
        updateContentForm();

    }, [props.match.params.id])
    const setFormValues = async () => {
        if (titleRef && titleRef.current) {
            titleRef.current.value = contentForm.title || "";
        }
        if (subtitleRef && subtitleRef.current) {
            subtitleRef.current.value = contentForm.subtitle || "";
        }
    }
    if (props.match.params.id) {
        setFormValues();
    }
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

                                    <div className="card">
                                        <div className="card-header">

                                        </div>
                                        <div className="card-body">

                                        </div>
                                    </div>


                                </div>

                                <div className="row mx-auto">
                                    <div className="col-6">
                                        <button type="button" onClick={() => handleSubmit(+props.match.params.id)} className="btn btn-primary">Update</button>
                                    </div>
                                    <div className="col-6 d-flex justify-content-end">
                                        {/* <Link to={`/${props.labels.plural.toLowerCase()}`} className="btn btn-danger" onClick={props.deleteContent(contentForm.id)}>Delete</Link> */}
                                        {/* <Link to={`/${props.labels.plural.toLowerCase()}`} className="btn btn-danger" onClick={() => { console.log("Deleting this data: ", contentForm) }}>Delete</Link> */}
                                        <button className="btn btn-danger" onClick={() => { console.log("Deleting this data: ", contentForm) }}>Delete</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    {EditSideBar(contentForm)}
                </div>
            </div>
        </Fragment>
    )
}


export default ContentForm;
