import {GET_USER_SUCCESS} from "./actions";

export const initialSate = {
    users: []
}

const rootReducer = (state = initialSate, action) => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;