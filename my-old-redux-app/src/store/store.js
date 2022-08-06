// Tạo store
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"; // Dùng làm middleware gọi bất đồng bộ, như call api..
import rootReducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;



