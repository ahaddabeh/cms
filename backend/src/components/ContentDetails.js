import React, { Fragment, useEffect, useState } from 'react';

const splitUrl = (url) => {
    const urlArr = url.split("/");
    const type = urlArr[urlArr.length - 2];
    return type;
}




const ContentDetails = (props) => {
    const [contentDetails, setContentDetails] = useState({});
    console.log(props);
    const type = splitUrl(props.match.url);
    if (type === "pages") {
        const updateContentDetailsPage = async () => {
            const data = await props.fetchPage(props.match.params.id);
            console.log(data)
            setContentDetails(data);
        }
        useEffect(() => {
            updateContentDetailsPage()
        }, [props.match.params.id])
    }
    if (type === "categories") {
        const updateContentDetailsCategory = async () => {
            const data = await props.fetchCategory(props.match.params.id);
            console.log(data)
            setContentDetails(data);
        }
        useEffect(() => {
            updateContentDetailsCategory()
        }, [props.match.params.id])
    }
    if (type === "tags") {
        const updateContentDetailsTag = async () => {
            const data = await props.fetchTag(props.match.params.id);
            console.log(data)
            setContentDetails(data);
        }
        useEffect(() => {
            updateContentDetailsTag()
        }, [props.match.params.id])
    }

    return (
        <Fragment>
            <div className="card">
                <div className="card-header">
                    <h3>{contentDetails.title}</h3>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{contentDetails.subtitle}</h4>
                    <div dangerouslySetInnerHTML={{ __html: `${contentDetails.content}` }} />
                </div>
            </div>
            {console.log(contentDetails)}
        </Fragment>
    )
}

export default ContentDetails;