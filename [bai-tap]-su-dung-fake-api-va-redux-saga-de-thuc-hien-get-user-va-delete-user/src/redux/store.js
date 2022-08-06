import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/userSage";
import rootReducer from "./reducer";


const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleWare)
)

sagaMiddleWare.run(rootSaga)


export default store;



