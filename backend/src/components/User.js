import React, { Fragment, useEffect, useState } from "react";

const User = (props) => {
    const [user, setUser] = useState({});
    const updateUser = async () => {
        const data = await props.fetchUser(props.match.params.id);
        setUser(data);
    }
    useEffect(() => {
        updateUser();
    }, [props.match.params.id])
    return (
        <Fragment>
            <h1>
                {user.firstName}
            </h1>
        </Fragment>
    )
}

export default User;