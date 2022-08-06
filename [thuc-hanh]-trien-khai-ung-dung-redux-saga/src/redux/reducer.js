import {FETCH_USER_SUCCESS, LOGIN_SUCCESS} from "./actions";
import Login from "../components/Login";
import login from "../components/Login";

// initialState
const initialState = {
    users: [],
    userLogined: {}
};
//reducer

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                userLogined: action.payload,
            }
        case FETCH_USER_SUCCESS:
            // console.log(action.payload)
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }

}

export default rootReducer;
