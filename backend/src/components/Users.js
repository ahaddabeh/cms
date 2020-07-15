import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./ui/Pagination";
const listGroupStyle = {
    width: "90%"
}

const displayUsers = (users, deleteFunction) => {
    return users.map((user) => <li key={`${user.firstName}_${user.lastName}_${user.id}`} className="list-group-item">
        <div className="row mx-auto">
            <div className="col-9">
                <div className="row mx-auto">
                    <Link to={`/user/${user.id}`}><strong>{`${user.firstName} ${user.lastName}`}</strong></Link>
                </div>
                <div className="row mx-auto">
                    <small className="text-muted">Last seen a few seconds ago</small>
                </div>
            </div>
            <div className="col-3 d-flex justify-content-between">
                {/* It's gonna say undefined for the roles because the objects don't have any roles yet */}
                <button className="btn btn-secondary btn-sm">{`${user.role}`}</button>
                {/* <button className=" btn btn-danger" onClick={() => { console.log("We're trying to delete this: ", user) }}>Delete</button> */}
                <button className=" btn btn-danger" onClick={() => { deleteFunction(user.id) }}>Delete</button>
            </div>
        </div>
    </li>
    )
}


const Users = (props) => {
    const [users, setUsers] = useState([]);
    const [recordCount, setRecordCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const deleteItem = async (id) => {
        try {
            await props.deleteUser(id);
            await updateUsers();
        }
        catch (error) {
            console.log("Error:", error);
        }
    }
    console.log(props);
    const updateUsers = async () => {
        const searchString = new URLSearchParams(props.history.location.search);
        const _currentPage = searchString.get("page") || 1;
        const data = await props.fetchUsers({ page: _currentPage });
        console.log("This is data", data);
        setUsers(data.data.rows);
        setRecordCount(data.data.count);
        setCurrentPage(_currentPage);
    }
    useEffect(() => {
        updateUsers()
    }, [props.history.location.search])
    if (users && !users.length) {
        return <h1>Loading...</h1>
    }
    return (
        <Fragment>
            <div className="row wrapper border-bottom info-bg page-heading m-4">
                <div className="col">
                    <h2>Users</h2>
                </div>
                <div className="row mx-auto">
                    <Link to="/user"><button className="btn btn-sm btn-success">New User+</button></Link>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <ul className="list-group" style={listGroupStyle}>
                    <li className="list-group-item bg-info">
                        <div className="row mx-auto">
                            <div className="col-9">
                                <span className="text-light">USER</span>
                            </div>
                            <div className="col-3 d-flex justify-content-start">

                                <span className="text-light">DESCRIPTION</span>
                            </div>
                        </div>
                    </li>
                    {displayUsers(users, deleteItem)}
                </ul>
            </div>
            <div className="row mx-auto d-flex justify-content-center">
                <Pagination type="users" total={recordCount} currentPage={currentPage} />
            </div>
        </Fragment >
    )
}

export default Users;