import React, { useRef, Fragment, useState, useEffect } from "react";
import { convertToRaw, Editor, EditorState, RichUtils, convertFromHTML, ContentState, AtomicBlockUtils } from "draft-js";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
// import RJSModal from "./Modal";
import draftToHTML from "draftjs-to-html";
import ReactModal from "react-modal";
const EditSideBar = (content) => {
    return (<div className="card mt-1">
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
            <p className="card-text"><i className="fas fa-redo-alt mr-2 text-muted"></i>
                <span className="text-muted">Revisions:</span>
                                        4 <a href="#"><small><u>Browse</u></small></a></p>
            <p className="card-text"><i className="fas fa-calendar-alt mr-2 text-muted"></i>
                <span className="text-muted">Published On:</span>
                {content.publishedOn}
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



const ContentForm = (props) => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [isToggled, setToggled] = useState(false);
    const editor = useRef(null);
    const focusEditor = () => editor.current.focus();
    const onChange = editorState => {
        setEditorState(editorState);
    }
    const titleRef = useRef();
    const subtitleRef = useRef();
    const viewRef = useRef();
    const layoutRef = useRef();

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            onChange(newState);
            return "handled";
        }
        return "not-handled";
    }

    // buttons automatically have an event attached to them. Do e.preventDefault() to
    // keep it from doing the default behavior
    // and to keep it from refreshing
    const _onBoldClick = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
    }
    const _onUnderlineClick = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
    }
    const _onItalicClick = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
    }
    const _onCodeClick = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleCode(editorState));
    }
    const _onUnorderedClick = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleBlockType(editorState, "unordered-list-item"));
    }
    const _onOrderedClick = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleBlockType(editorState, "ordered-list-item"));
    }
    const _onHeaderOneClick = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleBlockType(editorState, "header-one"));
    }
    const _onHeaderTwoClick = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleBlockType(editorState, "header-two"));
    }
    const _onHeaderThreeClick = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleBlockType(editorState, "header-three"));
    }
    const _onHeaderFourClick = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleBlockType(editorState, "header-four"));
    }
    const _onHeaderFiveClick = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleBlockType(editorState, "header-five"));
    }
    const _onHeaderSixClick = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleBlockType(editorState, "header-six"));
    }

    // This is just so the button and header can say different things depending on if we're creating or updating content
    const NeworUpdate = (props) => {
        if (props.match.params.id) {
            return "Update";
        }
        return "Create";
    }



    const rawContentPreview = convertToRaw(editorState.getCurrentContent());
    const markupPreview = draftToHTML(rawContentPreview);


    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
        console.log("From handleOpenModal", showModal)
    }
    const handleCloseModal = () => {
        setShowModal(false);
        console.log("From handleCloseModal", showModal)
    }
    const handlePreview = async () => {
        const preview_data = {
            title: titleRef.current.value,
            subtitle: subtitleRef.current.value,
            view: viewRef.current.value,
            layout: layoutRef.current.value,
            content: markupPreview
        }
        const data = await props.previewContent(preview_data);
        console.log("This is from the content form", data);
        return (<div>
            <Link className="btn btn-primary" onClick={handleOpenModal}>Preview</Link>
            <ReactModal isOpen={showModal} contentLabel="Minimal Modal Example">
                <Link className="btn btn-primary" onClick={handleCloseModal}>Close Modal</Link>
                <div dangerouslySetInnerHTML={{ __html: `${data.data}` }} />
                {console.log("This is from the modal", data.data)}
            </ReactModal>
        </div>)
    }



    const handleSubmit = async (contentId) => {
        const rawContentState = convertToRaw(editorState.getCurrentContent());
        const markup = draftToHTML(rawContentState);
        const content_data = {
            contentTypeId: props.labels.type,
            title: titleRef.current.value,
            subtitle: subtitleRef.current.value,
            view: viewRef.current.value,
            layout: layoutRef.current.value,
            createdBy: 1,
            updatedBy: 1,
            directory: `/${props.labels.plural.toLowerCase()}`,
            content: markup,
            categoryId: 0,
            isPublished: isToggled
        }
        // Todo: determine if the record exists or if we are inserting a new record
        // If record has an id, method = patch. else, it's a new record and we post
        if (contentId && contentId > 0) {
            await props.saveContent({ ...content_data, id: contentId }, "patch");
        }
        else {
            await props.saveContent(content_data);
        }
        console.log("This is content data: ", content_data);

    }

    const [contentForm, setContentForm] = useState({});


    const updateContentForm = async () => {
        if (props.match.params.id) {
            const data = await props.fetchDetails(props.match.params.id);
            setContentForm(data.data);
            setToggled(contentForm.isPublished);
            console.log(isToggled);
            if (data.data.content.length) {
                const blocksFromHTML = convertFromHTML(data.data.content);
                const state = ContentState.createFromBlockArray(
                    blocksFromHTML.contentBlocks,
                    blocksFromHTML.entityMap,
                );
                setEditorState(EditorState.createWithContent(state))
            }
        }
    }

    useEffect(() => {
        updateContentForm();
        focusEditor();
    }, [props.match.params.id])

    const setFormValues = async () => {
        if (titleRef && titleRef.current) {
            titleRef.current.value = contentForm.title || "";
        }
        if (subtitleRef && subtitleRef.current) {
            subtitleRef.current.value = contentForm.subtitle || "";
        }
        if (viewRef && viewRef.current) {
            viewRef.current.value = contentForm.view || "";
        }
    }

    const toggleTrueFalse = (e) => {
        e.preventDefault();
        setToggled(!isToggled);
        console.log(isToggled);
    }

    const determineIcon = (isToggled) => {
        if (isToggled === true) {
            return "fas fa-eye";
        }
        else if (isToggled === false) {
            return "fas fa-eye-slash";
        }
    }

    const determineColor = (isToggled) => {
        if (isToggled === true) {
            return "btn btn-success btn-sm";
        }
        else if (isToggled === false) {
            return "btn btn-danger btn-sm";
        }
    }

    if (props.match.params.id) {
        setFormValues();
    }

    return (
        <Fragment>
            <div className="row mx-auto">
                <div className="col-9">
                    <div className="card mt-1">
                        <div className="d-flex justify-content-around card-header bg-info text-light">
                            <h4>{`${NeworUpdate(props)} Content`}</h4>
                            {/* <button className={`btn ${determineToggleButtonColor} btn-sm`} onClick={_onTogglePublishClick}><i className={`${determineToggleButtonIcon} text-light`}></i></button> */}
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="d-flex justify-content-around">
                                    {}
                                    {/* <div>
                                        <Link className="btn btn-primary" onClick={handleOpenModal}>Preview</Link>
                                        <ReactModal isOpen={showModal} contentLabel="Minimal Modal Example">
                                            <Link className="btn btn-primary" onClick={handleCloseModal}>Close Modal</Link>
                                            <div dangerouslySetInnerHTML={{ __html: `${async () => await Promise.resolve(handlePreview())}` }} />
                                            {console.log("This is from the modal", async () => await Promise.resolve(handlePreview()))}
                                        </ReactModal>
                                    </div> */}

                                    <button className={determineColor(isToggled)} onClick={toggleTrueFalse}><i className={determineIcon(isToggled)}></i></button>

                                    {/* <button className="btn btn-warning" onClick={handlePreview}>get preview data</button> */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" ref={titleRef} className="form-control" id="title" aria-describedby="titleHelp" placeholder="Enter title" />
                                    <small id="titleHelp" className="form-text text-muted">This is required</small>
                                </div>
                                <div className="row">

                                    <div className="form-group col">
                                        <label htmlFor="view">View</label>
                                        <select name="view" className="custom-select" ref={viewRef}>
                                            <option value="Home">Home</option>
                                            <option value="Inner">Inner</option>
                                            <option value="Blog">Blog</option>
                                        </select>
                                        <small className="form-text text-muted">This is required</small>
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="layout">Layout</label>
                                        <select name="layout" className="custom-select" ref={layoutRef}>
                                            <option value="default.md">Default</option>
                                            <option value="products.md">Products</option>
                                            <option value="services.md">Services</option>
                                            <option value="stories.md">Stories</option>
                                            <option value="blog.md">Blogs</option>
                                        </select>
                                        <small className="form-text text-muted">This is required</small>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subitle">Subtitle</label>
                                    <input type="text" ref={subtitleRef} className="form-control" id="subitle" aria-describedby="subtitleHelp" placeholder="Enter subtitle" />
                                    <small id="subtitleHelp" className="form-text text-muted">This is optional</small>
                                </div>
                                <div className="form-group">
                                    <div className="card">
                                        <div className="card-header">
                                            <button className="btn btn-light btn-sm border mx-2" onClick={_onBoldClick}><i className="fas fa-bold"></i></button>
                                            <button className="btn btn-light btn-sm border mx-2" onClick={_onItalicClick}><i className="fas fa-italic"></i></button>
                                            <button className="btn btn-light btn-sm border mx-2" onClick={_onUnderlineClick}><i className="fas fa-underline"></i></button>
                                            <button className="btn btn-light btn-sm border mx-2" onClick={_onCodeClick}><i className="fas fa-code"></i></button>
                                            <button className="btn btn-light btn-sm border mx-2" onClick={_onUnorderedClick}><i className="fas fa-list-ul"></i></button>
                                            <button className="btn btn-light btn-sm border mx-2" onClick={_onOrderedClick}><i className="fas fa-list-ol"></i></button>
                                            <button className="btn btn-light btn-sm border mx-2" onClick={_onHeaderOneClick}>H1</button>
                                            <button className="btn btn-light btn-sm border mx-2" onClick={_onHeaderTwoClick}>H2</button>
                                            <button className="btn btn-light btn-sm border mx-2" onClick={_onHeaderThreeClick}>H3</button>
                                            <button className="btn btn-light btn-sm border mx-2" onClick={_onHeaderFourClick}>H4</button>
                                            <button className="btn btn-light btn-sm border mx-2" onClick={_onHeaderFiveClick}>H5</button>
                                            <button className="btn btn-light btn-sm border mx-2" onClick={_onHeaderSixClick}>H6</button>
                                        </div>
                                        <div className="card-body" onClick={focusEditor}>
                                            <Editor ref={editor} editorState={editorState} onChange={onChange} handleKeyCommand={handleKeyCommand} />
                                        </div>
                                    </div>
                                </div>

                                <div className="row mx-auto">
                                    <div className="col-6">
                                        <Link to={`/${props.labels.plural.toLowerCase()}`} onClick={() => handleSubmit(+props.match.params.id)} className="btn btn-primary">{NeworUpdate(props)}</Link>
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
                    <EditSideBar />
                </div>
            </div>
        </Fragment>
    )
}


export default ContentForm;
