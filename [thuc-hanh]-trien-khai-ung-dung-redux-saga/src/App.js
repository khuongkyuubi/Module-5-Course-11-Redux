import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./redux/store"
import User from "./components/User";


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Login/>}/>
                    <Route path={"/user"} element={<User/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>

    );
}

export default App;
