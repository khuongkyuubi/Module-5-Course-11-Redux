import React ,{useState}from 'react';
import {addTodo} from "../store/reducers/todosSlice";
import {useDispatch} from "react-redux";

function TodoForm() {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        // Tham số truyền vào cho addTodo sẽ là payload cho addTodo
        dispatch(addTodo(title))
        setTitle("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       value={title}
                       onChange={e=>setTitle(e.target.value)}
                />
                <button type={"submit"}>Add</button>
            </form>
        </div>
    );
}

export default TodoForm;