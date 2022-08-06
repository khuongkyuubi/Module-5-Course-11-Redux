import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";

// Cách redux thunk hoạt động

// Redux-thunk funtion
export const fakeLogin = payload => {
    return async dispatch => {
        const { username, password } = payload;
        if (username === "admin" && password === "letmein") {
            dispatch({
                type: LOGIN_SUCCESS,
                payload
            });
            dispatch(getUser());
        } else {
            alert("login failure!");
        }
    };
};

// Redux-thunk funciton
export const getUser = () => {
    return async dispatch => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: response.data
        });
    };
};