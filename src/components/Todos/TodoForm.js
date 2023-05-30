import { useState } from 'react'
import Button from '../UI/Button'
import styles from './TodoForm.module.scss'


function TodoForm({addTodo}) {
    const [text, setText] = useState('')
    const onSubmitHandler = (event) => {
        event.preventDefault()

        if(!text || !text.trim().length) {
            setText('')
            return
        }

        addTodo(text)
        setText('')
    }
    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input
                    placeholder="Enter new todo"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <Button title="Submit">Submit</Button>
        </form>
        </div>

    )
}

export default TodoForm