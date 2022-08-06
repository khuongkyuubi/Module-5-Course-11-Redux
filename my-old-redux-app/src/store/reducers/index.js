import {combineReducers} from "redux"
import todoReducer from "./todoReducer";

// Combine các reducer lại với nhau
const rootReducer = combineReducers({
    myTodos : todoReducer,

});

export default rootReducer;
