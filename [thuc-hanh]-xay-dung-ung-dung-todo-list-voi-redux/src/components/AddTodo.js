import {useEffect, useState} from 'react';
import { nanoid } from "nanoid";
import {useDispatch} from "react-redux";
import * as actions from "../redux/actions"

function AddTodo() {
    const [todo, setTodo] = useState({
        title: "",
        content: ""
    });
    const dispatch = useDispatch();


    const handleChange = event => {
        setTodo({
            ...todo,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(todo.title) {
            const newTodo = {
                id: nanoid(5),
                title: todo.title,
                content: todo.content
            }
            dispatch(actions.addTodo(newTodo))
        } else {
            alert("Title required!")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                Title<input type="text"
                            name="title"
                            value={todo.title}
                            onChange={handleChange}

            /><br/>
                Body<input type="text"
                           name="content"
                           value={todo.content}
                           onChange={handleChange}

            /><br/>
                <button type={"submit"}>Add</button>
            </form>

        </div>
    );
}

export default AddTodo;