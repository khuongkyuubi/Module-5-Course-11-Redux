// export const markComplete = () => {
//     const markCompleteAction = dispatch => {
//         dispatch({
//             type: "MARK_COMPLETED",
//             payload: "my payload"
//         })
//     }
//
//     return markCompleteAction
// }
// short hand
import axios from "axios";
import  {GET_TODOS, MARK_COMPLETED,ADD_TODO, DELETE_TODO} from "../types";

export const markComplete = (id) => (dispatch => {
    console.log(id)
    dispatch({
        type: MARK_COMPLETED,
        payload: {
            id
        }
    })
});

export const addTodo = (todo) => (async dispatch => {
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/todos", todo)
        } catch (err) {
            console.log(err)
        }
        dispatch({
            type: ADD_TODO,
            payload: {
                todo
            }
        })
    }
);

export const deleteTodo = (id) => (async dispatch => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        } catch (err) {
            console.log(err)
        }
        dispatch({
            type: DELETE_TODO,
            payload: {
                id
            }
        })
    }
)

export const getTodo = () => (async dispatch => {
    try {
        const {data: todos} = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        dispatch({
            type: GET_TODOS,
            payload: {
                todos
            }
        })
    } catch (e) {
        console.log(e)
    }
})