import React, { Fragment, useEffect, useState } from "react";

const listGroupStyle = {
    width: "90%"
}

const displayUsers = (users) => {
    return users.map((user) => {
        return (<li key={`${user.firstName}_${user.lastName}_${user.id}`} class="list-group-item">
            <div class="row mx-auto">
                <div class="col-9">
                    <div class="row mx-auto">
                        <strong>{`${user.firstName} + ${" "} + ${user.lastName}`}</strong>
                    </div>
                    <div class="row mx-auto">
                        <small class="text-muted">Last seen a few seconds ago</small>
                    </div>
                </div>
                <div class="col-3 d-flex justify-content-end">
                    <button class="btn btn-secondary btn-sm">{user.role}</button>
                </div>
            </div>
        </li>)
    })
}


const Users = (props) => {
    const [users, setUsers] = useState({});
    console.log(props);
    const updateUsers = async () => {
        const data = await props.fetchUsers();
        setUsers(data);
    }
    useEffect(() => {
        updateUsers()
    }, [props.history.location.search])
    return (
        <Fragment>
            <div class="row wrapper border-bottom info-bg page-heading m-4">
                <h2>Users</h2>

            </div>
            <div class="d-flex justify-content-center">
                <ul class="list-group" style="width:90%">
                    <li class="list-group-item bg-info">
                        <div class="row mx-auto">
                            <div class="col-9">
                                <span class="text-light">USER</span>
                            </div>
                            <div class="col-3 d-flex justify-content-end">

                                <span class="text-light">DESCRIPTION</span>
                            </div>
                        </div>
                    </li>
                    {displayUsers(users)}
                </ul>
            </div>
        </Fragment>
    )
}

export default Users;