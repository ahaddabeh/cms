import React, { Fragment, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
const listGroupStyle = {
    width: "90%"
}

const determineContentType = (id) => {
    if (+id === 1) {
        return "Pages";
    }
    else if (+id === 2) {
        return "Pategories";
    }
    else if (+id === 3) {
        return "Tags";
    }
    return 0;
}

//Find out why tf the stupid map function isnt working
const displayContent = (contentArray, contentType) => {
    return (contentArray.map((cont) =>
        <Link to={`/${contentType}/${cont.id}`}><li key={`${cont.title}_${cont.subtitle}_${cont.id}`} className="list-group-item">
            <div className="row mx-auto">
                <div className="col-9">
                    <div className="row mx-auto">
                        <strong>{cont.title}</strong>
                    </div>
                    <div className="row mx-auto">
                        <small className="text-muted">{cont.subtitle}</small>
                    </div>
                </div>
                <div className="col-3 d-flex justify-content-between">
                    <p className="bg-secondary text-light">PUBLISHED</p>
                    <p>a year ago</p>
                </div>
            </div>
        </li>
        </Link>)
    )

}


const Content = (props) => {
    const [content, setContent] = useState([]);

    console.log(props);
    const updateContent = async () => {
        const data = await props.fetchContent();
        setContent(data);

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
                    <button className="btn btn-sm btn-success">New {props.labels.singular}</button>
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
                    {displayContent(content, props.labels.plural.toLowerCase())}
                </ul>
            </div>
            {console.log(content)}
        </Fragment>
    )
}

export default Content;