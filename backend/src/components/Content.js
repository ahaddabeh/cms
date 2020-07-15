import React, { Fragment, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Pagination from "./ui/Pagination";
const listGroupStyle = {
    width: "90%"
}

const determineIcon = (isPublished) => {
    if (isPublished === true) {
        return "fas fa-eye text-success";
    }
    else if (isPublished === false) {
        return "fas fa-eye-slash text-danger";
    }
}

const displayContent = (contentArray, contentType, deleteFunction) => {
    // const displayContent = (contentArray, contentType) => {
    return (contentArray.map((cont) =>
        <li key={`${cont.title}_${cont.subtitle}_${cont.id}`} className="list-group-item">
            <div className="row mx-auto">
                <div className="col-9">
                    <div className=" row mx-auto d-flex align-items-center">
                        <Link to={`/${contentType}/${cont.id}`}><strong>{cont.title}</strong></Link>
                        <i className="fas fa-trash-alt ml-2" onClick={() => { deleteFunction(cont.id) }}></i>
                    </div>
                    <div className="row mx-auto">
                        <small className="text-muted">{cont.subtitle}</small>
                    </div>
                </div>
                <div className="col-3 d-flex justify-content-between">
                    <i className={determineIcon(cont.isPublished)}></i>
                    <p>a year ago</p>
                </div>
            </div>
        </li>
    )
    )

}


const Content = (props) => {
    const [content, setContent] = useState([]);
    const [recordCount, setRecordCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [size, setSize] = useState(25);
    const deleteItem = async (id) => {
        try {
            await props.deleteContent(id);
            await updateContent();
        } catch (error) {
            console.log("Error", error);
        }

    }
    console.log(props);
    const updateContent = async () => {
        const searchString = new URLSearchParams(props.history.location.search);
        const _currentPage = +searchString.get("page") || 1;
        const _size = +searchString.get("size") || 25;
        const data = await props.fetchContent({ page: _currentPage, size: _size });
        console.log("This is the content", data);
        setContent(data.data.rows);
        setRecordCount(data.data.count);
        setCurrentPage(_currentPage);
        setSize(_size);
    }
    useEffect(() => {
        updateContent()
    }, [props.history.location.search])
    return (
        <Fragment>
            <div className="row wrapper border-bottom info-bg page-heading m-4">
                <div className="col">
                    <h2>{props.labels.plural}</h2>
                </div>
                <div className="row mx-auto">
                    <Link to={`/${props.labels.singular.toLowerCase()}`}><button className="btn btn-sm btn-success">New {props.labels.singular}+</button></Link>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <ul className="list-group" style={listGroupStyle}>
                    <li className="list-group-item bg-info">
                        <div className="row mx-auto">
                            <div className="col-9">
                                <span className="text-light">TITLE</span>
                            </div>
                            <div className="col-3 d-flex justify-content-between">
                                <span className="text-light">STATUS</span>
                                <span className="text-light">LAST UPDATE</span>
                            </div>
                        </div>
                    </li>
                    {/* {displayContent(content, props.labels.singular.toLowerCase(), deleteItem)} */}
                    {displayContent(content, props.labels.singular.toLowerCase(), deleteItem)}
                </ul>
            </div>

            <div className="row mx-auto d-flex justify-content-center">
                <Pagination type={props.labels.plural.toLowerCase()} size={size} total={recordCount} currentPage={currentPage} />
            </div>
        </Fragment>
    )
}

export default Content;