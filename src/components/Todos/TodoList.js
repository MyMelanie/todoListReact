import Todo from "./Todo"
import styles from './TodoList.module.scss'

function TodoList({ todos, deleteTodo, toggleTodo }) {
    return (
        <div className="styles.todoListContainer">
            {!todos.length && <h2>* Your Todo list is empty *</h2>}
            {todos.map((item) => (
                <Todo
                    key={item.id}
                    todo={item}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </div>
    )
}

export default TodoList