import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer";
import rootSaga from "../saga/userSage";

// Apply middelware
const sagaMiddleware = createSagaMiddleware();

// Create store, and Đăng ký reducer cho redux quản lý
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

// Run sagaMiddleware
sagaMiddleware.run(rootSaga)

export default store;