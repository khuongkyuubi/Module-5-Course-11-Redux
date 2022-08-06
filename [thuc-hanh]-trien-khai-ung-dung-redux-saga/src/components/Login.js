import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {LOGIN} from "../redux/actions"

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    // Lấy ra state lưu trong store bằng useSelector
    const userLogined = useSelector(state => state.userLogined)
    // Two-way binding
    const setValueForUser = (key, value) => {
        const newVal = {...user, [key]: value};
        setUser(newVal);
    };
    // Dispatch user
    const login = () => {
        dispatch({
            type: LOGIN,
            payload: user
        })

    }

    // Check if logined will redirect to /users
    useEffect(() => {
        // Đầu tiên, sau khi dispatch user, nếu oke sẽ lưu user Logined vào state bến store, sau đó kiểm tra bằng useSelector nếu có user thì chuyển sang trang users
        if (userLogined.username) {
            navigate("/user")
        }
    }, [userLogined, navigate])

    return (
        <form>
            <label>User name</label>
            <input
                id="username"
                onChange={e => setValueForUser("username", e.target.value)}
                type="text"
            />
            <label>Password</label>
            <input
                id="password"
                onChange={e => setValueForUser("password", e.target.value)}
                type="password"
            />
            <button
                type="button"
                onClick={() => {
                    login();
                }}
            >
                Login
            </button>
        </form>
    )


}

export default Login;
