import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {
    todosSelector,
    markCompleted,
    deleteTodo,
    getAllTodo,
    getTodos,
    getTodosThunk
} from "../store/reducers/todosSlice";
import TodoForm from "./TodoForm";
import axios from "axios";


function Todos() {
    const dispatch = useDispatch();
    const todos = useSelector(todosSelector)
    useEffect(() => {
       // dispatch(getTodos())
       dispatch(getTodosThunk())
    }, [])
    const handleCheckbox = (id) => {
        dispatch(markCompleted(id))
    }

    const handleDelete = (id) => {
        window.confirm("Are you sure?") && dispatch(deleteTodo(id))

    }
    return (
        <div className={"todo-list"}>
            <TodoForm/>
            <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}
                            className={todo.completed ? "completed" : ""}
                        >
                            {todo.title}
                            <input type="checkbox"
                                   checked={todo.completed}
                                   onChange={handleCheckbox.bind(this, todo.id)}

                            />
                            <button onClick={handleDelete.bind(this, todo.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>

        </div>
    );
}

export default Todos;