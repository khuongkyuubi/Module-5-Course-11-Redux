export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";



export const getUsers = () => {
    return {
        type: GET_USER,
        payload : {}
    }
}

export const getUsersSuccess = (users) => {
    return {
        type: GET_USER_SUCCESS,
        payload : users
    }
}

export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        payload : id
    }
}

