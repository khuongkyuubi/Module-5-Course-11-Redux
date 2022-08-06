const initialState = {
    /*    todos: [
            {
                id: 1,
                title: "todo 1",
                completed: false
            },
            {
                id: 2,
                title: "todo 2",
                completed: true
            },
            {
                id: 3,
                title: "todo 3",
                completed: true
            }
            ,
            {
                id: 4,
                title: "todo 4",
                completed: false
            }
        ]

     */
    todos: []
}

/*
* Todos.js
* import {v4 as uuidv4} from "uuid"
* {
* id: uuidv4
* title: ...* .**
complete: false
*
* todoReducer
* case ADD_TODO
*
* * * */

const todoReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case "MARK_COMPLETED":
            console.log(payload)
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === payload.id) {
                        todo.completed = !todo.completed
                    }
                    return todo;
                })
            };
        case "ADD_TODO":
            return {
                ...state,
                todos: [payload.todo, ...state.todos]
            }
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload.id)
            }
        case "GET_TODOS":
            return {
                ...state,
                todos: payload.todos
            }
        default:
            return state;
    }
}

export default todoReducer;


