import {createAsyncThunk, createSlice, nanoid} from "@reduxjs/toolkit";
import axios from "axios";

// Reducer Thunk
export const getTodosThunk = createAsyncThunk("todos/todosFetched", async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
        return response.data
    } catch (err) {
        console.log(err)
    }
})

// typePrefix must be name in Slice
export const addNewTodo = createAsyncThunk("todos/addNewTodo",
    async (title) => {
        try {
            const newTodo = {
                id: nanoid(),
                title,
                completed: false

            }
            const response = await axios.post(`https://jsonplaceholder.typicode.com`, newTodo)

        } catch (err) {
            console.log(err)
        }
    });

export const removeTodo = createAsyncThunk("todos/removeTodos",
    async (todoId) => {
        try {
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/${todoId}`)
        } catch (err) {
            console.log(err)
        }
    });

// Trang thai ban dau
const todoSlice = createSlice({
    name: "todos",
    initialState: {
        allTodos: [
            // {
            //     id: 1,
            //     title: "todo 1",
            //     completed: false
            // },
            // {
            //     id: 2,
            //     title: "todo 2",
            //     completed: true
            // },
            // {
            //     id: 3,
            //     title: "todo 3",
            //     completed: true
            // }
        ]
    },
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.allTodos.unshift(action.payload)
            },
            prepare: (title) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        completed: false
                    }

                }
            }
        },
        markCompleted: (state, action) => {
            state.allTodos.forEach(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed;
                }
            });
        },
        deleteTodo: (state, action) => {
            state.allTodos = state.allTodos.filter(todo => todo.id !== action.payload);
        },
        getAllTodo: (state, action) => {
            state.allTodos = action.payload
        },
        todosFetched: (state, action) => {
            state.allTodos = action.payload
        },

    },
    extraReducers: {
        // Get all data new thunk reducer
        [getTodosThunk.pending]: (state, action) => {
            console.log("fetching data from server...")
        },
        [getTodosThunk.fulfilled]: (state, action) => {
            console.log("done")
            state.allTodos = action.payload
        },
        [getTodosThunk.rejected]: (state, action) => {
            console.log("get data faild")
        },
        // Add new todo
        [addNewTodo.fulfilled]: (state, action) => {
            state.allTodos.unshift(action.payload)
        },
        // Delete todo

        [removeTodo.fulfilled] : (state, action) => {
            state.allTodos = state.allTodos.filter(todo => todo.id !== action.payload)
        }

    }
});

// Async action creator, action and reducer dispatch
// Với các hoạt động bất đồng bộ, phải tự viết actions Creator để cho reducer xử lý bất đông bộ
export const getTodos = () => (
    async dispatch => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
            dispatch(todosFetched(response.data))
        } catch (err) {
            console.log(err)
        }
    })


// Reducer -> thay doi state
const todoReducer = todoSlice.reducer;

// Redux sẽ gán các reducer vào trong state của store, nên khi state.reducer sẽ trả về cái mà reducer trả về

// Công việc khải tạo reducer và return trong reduce thì slice đã làm hộ

// Export action (ở toolkit, actions và reducer gom chung vào nhau)
export const {addTodo, markCompleted, deleteTodo, getAllTodo, todosFetched} = todoSlice.actions

// Export selector
// todosReducer cũng trả về state
export const todosSelector = state => state.todoReducer.allTodos

export default todoReducer;