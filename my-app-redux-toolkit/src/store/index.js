// Nơi lưu trữ toàn bộ dữ liệu
import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./reducers/todosSlice";

// Store
const store =configureStore({
    reducer: {
        todoReducer
    }
});

//Export
export default store;
