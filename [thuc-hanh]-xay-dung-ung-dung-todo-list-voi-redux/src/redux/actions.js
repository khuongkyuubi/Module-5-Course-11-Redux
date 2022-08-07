import axios from "axios";

export const ADD_TODO = "todos/ADD_TODO";
export const DELETE_TODO = "todos/DELETE_TODO";


export const getData = payload => async dispatch => {
    try {
        const response = await axios.get(`http://localhost/${payload}`)

    } catch (err) {

    }
}


export const addTodo = payload => ({
    type: ADD_TODO,
    payload
});


export const deleteTodo = payload => ({
    type: DELETE_TODO,
    payload
});

