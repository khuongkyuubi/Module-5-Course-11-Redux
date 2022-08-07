import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import * as actions from "../redux/actions"

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleDelete = todoId => {
        window.confirm("You sure?") &&
        dispatch(actions.deleteTodo(todoId))
    }


    return (
        <div>
            <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}>
                            <h2>{todo.title}</h2>
                            <p>{todo.content}</p>
                            <button onClick={handleDelete.bind(this, todo.id)}>Remove</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Todos;