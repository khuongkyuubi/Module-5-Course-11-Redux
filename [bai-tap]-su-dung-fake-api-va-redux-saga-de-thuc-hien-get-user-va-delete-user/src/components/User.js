import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {deleteUser, getUsers} from "../redux/actions";


function User() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    // console.log(users);
    const handleGetUsers = () => {
        dispatch(getUsers())
    }

    const handleDelete = (userId) => {
        dispatch(deleteUser(userId));
    }

    return (
        <div>
            <h1>User List</h1>
            <button onClick={handleGetUsers}>
                Get users
            </button>
            { users.length > 0 && (<table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users?.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>
                            <button onClick={handleDelete.bind(this, user.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>)}
        </div>
    );
}

export default User;