import React from 'react';
import {useSelector} from "react-redux";
import {todosSelector} from "../store/reducers/todosSlice";

function Navbar() {
    const todos = useSelector(todosSelector)
    return (
        <div className={"navbar"}>
            <h1>
                My Redux App Todo
            </h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total todos : {todos.length}</li>

            </ul>
        </div>
    );
}

export default Navbar;