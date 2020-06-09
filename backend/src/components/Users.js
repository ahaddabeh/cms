import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
const listGroupStyle = {
    width: "90%"
}

const displayUsers = (users) => {
    return users.map((user) => <Link to={`/users/${user.id}`}> <li key={`${user.firstName}_${user.lastName}_${user.id}`} className="list-group-item">
        <div className="row mx-auto">
            <div className="col-9">
                <div className="row mx-auto">
                    <strong>{`${user.firstName} ${user.lastName}`}</strong>
                </div>
                <div className="row mx-auto">
                    <small className="text-muted">Last seen a few seconds ago</small>
                </div>
            </div>
            <div className="col-3 d-flex justify-content-end">
                {/* It's gonna say undefined for the roles because the objects don't have any roles yet */}
                <button className="btn btn-secondary btn-sm">{`${user.role}`}</button>
            </div>
        </div>
    </li>
    </Link >
    )
}


const Users = (props) => {
    const [users, setUsers] = useState([]);
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
            <div className="row wrapper border-bottom info-bg page-heading m-4">
                <h2>Users</h2>

            </div>
            <div className="d-flex justify-content-center">
                <ul className="list-group" style={listGroupStyle}>
                    <li className="list-group-item bg-info">
                        <div className="row mx-auto">
                            <div className="col-9">
                                <span className="text-light">USER</span>
                            </div>
                            <div className="col-3 d-flex justify-content-end">

                                <span className="text-light">DESCRIPTION</span>
                            </div>
                        </div>
                    </li>
                    {displayUsers(users)}
                </ul>
            </div>
        </Fragment >
    )
}

export default Users;