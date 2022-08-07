import * as actions from "./actions";

import {combineReducers} from "redux";

const initialState = [
    {
        id: 1,
        title: "Hello",
        content: "This is first todo"
    },
    {
        id: 2,
        title: "Hello 2",
        content: "This is first todo 2"
    },
    {
        id: 3,
        title: "Hello 3",
        content: "This is first todo 3"
    }
]

export const todosReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case actions.ADD_TODO:
            return [
                payload,
                ...state
            ]
        case actions.DELETE_TODO:
            console.log(payload)
            return state.filter(todo => todo.id !== payload)
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    todos: todosReducer,
})
export default rootReducer;
