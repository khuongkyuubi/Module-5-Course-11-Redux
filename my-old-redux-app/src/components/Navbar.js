import {connect} from "react-redux";
import PropTypes from "prop-types";

function Navbar({todos}) {
    return (
        <div className="navbar">
            <h1>My Redux Todos App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total totos: {todos.length}</li>
            </ul>

        </div>
    );
}

Navbar.propTypes = {
    todos: PropTypes.array.isRequired
}

//The connect() function connects a React component to a Redux store.
// connect giúp connect với redux store (if store update, mapStateToProps sẽ được gọi)
// state là store state từ store
const mapStateToProps = state => ({
    todos: state.myTodos.todos
})

// {} Nếu mapDipatchToProps là 1 object, nó sẽ được bind vào action trong dispatch của store

export default connect(mapStateToProps, {})(Navbar);