import './App.css';
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
    return (
        <div>
            <h1>Todos List</h1>
            <AddTodo/>
            <Todos/>
        </div>
    );
}

export default App;
