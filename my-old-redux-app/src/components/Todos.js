import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import TodoForm from "./TodoForm";
import {addTodo, deleteTodo, getTodo, markComplete} from "../store/actions/todoActions";


function Todos({todos, markComplete, deleteTodo, getTodo}) {
    const handleClickDelete = (id) => {
        window.confirm("You sure delte this todo? id:" + id) &&
        deleteTodo(id)
    }

    useEffect(()=> {
        getTodo()
    },[])

    return (
        <div className={"todo-list"}>
            <TodoForm/>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}
                        className={todo.completed ? "completed" : ""}
                    >
                        {todo.title}
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={markComplete.bind(this, todo.id)}
                        />
                        <button onClick={handleClickDelete.bind(this, todo.id)}>Delete</button>
                    </li>
                ))}

            </ul>
        </div>
    );
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    getTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    console.log("state", state)
    return ({
        todos: state.myTodos.todos
    })
}

// mapDispatchToProps sẽ bind hàm dispatch của store vào làm tham số cho từng hàm trong object trong markComplete , nhờ đó markComplete có thể gọi dispatch trong chính nó

export default connect(mapStateToProps, {markComplete, addTodo, deleteTodo, getTodo})(Todos);