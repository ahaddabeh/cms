import React, { Fragment, useEffect, useState } from 'react';
import RichTextExample from "./wysiwyg/index";
const splitUrl = (url) => {
    const urlArr = url.split("/");
    const type = urlArr[urlArr.length - 2];
    return type;
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
            <RichTextExample initialValue={initialValue} />
        </Fragment>
    )
}

export default ContentDetails;