import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/users";
import {put, takeLatest} from "redux-saga/effects"
import {DELETE_USER, GET_USER, getUsers, getUsersSuccess} from "../redux/actions";

function* getUser() {
    try { // get user
        const response = yield axios.get(baseUrl);
        yield put(getUsersSuccess(response.data));
    } catch (err) {
        console.log("err-getUsers")
    }

}

function* deleteUser(action) {
    try {
        const response = yield axios.delete(baseUrl + `/${action.payload}`);
        alert(`Delete ok - ${response.status}`)
        yield put(getUsers());

    } catch (err) {
        alert("Delete failed");
    }
}

export default function* rootSaga() {
    yield takeLatest(GET_USER, getUser);
    yield takeLatest(DELETE_USER, deleteUser)

}