import React from 'react';
import {addTodo} from "../store/actions/todoActions";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {connect} from "react-redux";
import PropTypes from "prop-types";


function TodoForm({addTodo}) {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            return false
        }

        const newTodo = {
            id: uuidv4(5),
            title,
            completed: false
        }

        console.log(newTodo)

        addTodo(newTodo);
        setTitle("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       name="todo"
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default connect(null, {addTodo})(TodoForm);