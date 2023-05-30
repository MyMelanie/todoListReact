import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

import './App.scss'

function App() {
    const [todos, setTodos] = useState([])

    const addTodoHandler = (text) => {
        const newTodo = {
            text: text,
            isCompleted: false,
            id: uuidv4(),
        }
        setTodos([...todos, newTodo])
    }

    const deleteTodohandler = (id) => {
        setTodos(todos.filter((item) => item.id !== id))
    }

    const toggleTodoHandler = (id) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : { ...todo }
            })
        )
    }

    const resetTodosHandler = () => {
        setTodos([])
    }

    const deleteCompletedHandler = () => {
        setTodos(todos.filter((item) => !item.isCompleted))
    }

	const completedTodoCount = todos.filter((item) => item.isCompleted).length

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoHandler} />
            {todos.length > 0 && (
                <TodosActions
                    resetTodos={resetTodosHandler}
                    deleteCompletedTodos={deleteCompletedHandler}
					completedTodosExist={!!completedTodoCount}
                />
            )}

            <TodoList
                todos={todos}
                deleteTodo={deleteTodohandler}
                toggleTodo={toggleTodoHandler}
            />
			{completedTodoCount > 0 && <h2>{`Congratulations!!!  You have completed ${completedTodoCount} ${completedTodoCount > 1 ? 'todos' : 'todo'}`}</h2>}
        </div>
    )
}

export default App
