import React, { useEffect, useState } from 'react';

const ContentType = (props) => {
    const [contentType, setContentType] = useState({});
    console.log(props);
    const updateContentType = async () => {
        const data = await props.fetchContentType();
        setContentType(data);
    }
    useEffect(() => {
        updateContentType()
    }, [props.history.location.search])
    return (
        <div>
            <h1>
                ContentType
        </h1>
            {console.log(contentType)}
        </div>
    )
}

export default ContentType;