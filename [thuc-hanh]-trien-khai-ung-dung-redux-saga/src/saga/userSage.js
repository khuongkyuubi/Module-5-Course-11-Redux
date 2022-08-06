import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    LOGIN,
    LOGIN_SUCCESS
} from "../redux/actions";
import login from "../components/Login";


const BaseURL = "https://jsonplaceholder.typicode.com/users";

// redux-saga sử dụng generator function và yield để xử lý các tác vụ bất đồng bộ,


/*
* Khai báo hàm getUser():
Fetch dữ liệu từ Mock API
Sử dụng yield put để dispatch
action có type FETCH_USER_SUCCESS
payload là data lấy được từ Mock API*/
function* getUser(action) {
    try {
        const response = yield axios.get(BaseURL);
        // console.log(response.data)
        // Sau khi lấy được dữ liệu từ fake API
        // dispatch 1 action tới reducer kèm theo dữ liệu mà API trả về
        yield put({
            type: FETCH_USER_SUCCESS,
            payload: response.data
        })
    } catch (err) {
        console.log("erro - getUser: ", err);
    }
}

/*Khai báo hàm authSagaFun():
Lấy thông tin user từ action
Kiểm tra thông tin đăng nhập có đúng như yêu cầu bài toán không, nếu đúng thì thực hiện 2 dispatch
action có type LOGIN_SUCCESS, payload là user
action có type FETCH_USER, payload là {}*/
function* authSagaFun(action) {
    const user = action.payload;
    console.log(user)
    if (user.username === "admin" && user.password === "letmein") {
        console.log("login ok")
        yield put({
            type: LOGIN_SUCCESS,
            payload: user
        })
        yield put({
            type: FETCH_USER,
            payload: {}
        });
    } else {
        console.log("not login");
    }
}

/*
Khai báo hàm rootSaga():
có nhiệm vụ lắng nghe action và xử lí gọi hàm tương ứng
* */

export default function* rootSaga() {
    yield takeLatest(LOGIN, authSagaFun);
    yield takeLatest(FETCH_USER, getUser)
}

/*
Như vậy middleware redux-saga là middleware đứng ở giữ action và reducer, nó sẽ lắng nghe các  action rồi thực hiện, sau đó phân chia ra các action khác nhỏ hơn để dispatch,
Và quan trọng là nó thực hiện các tác vụ bất đồng bộ
* */