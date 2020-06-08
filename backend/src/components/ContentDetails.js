import React, { useEffect, useState } from 'react';

const ContentDetails = (props) => {
    const [contentDetails, setContentDetails] = useState({});
    console.log(props);
    const updateContentDetails = async () => {

        const data = await props.fetchContentDetails(props.match.params.id);
        setContentDetails(data);
    }
    useEffect(() => {
        updateContentDetails()
    }, [props.history.location.search])
    return (
        <div>
            <h1>
                ContentDetails
        </h1>
            {console.log(contentDetails)}
        </div>
    )
}

export default ContentDetails;