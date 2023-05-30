import { RiDeleteBin2Line } from 'react-icons/ri'
import { FiRefreshCcw } from 'react-icons/fi'
import Button from '../UI/Button'
import styles from './TodosActions.module.scss'

function TodosActions({ resetTodos, deleteCompletedTodos, completedTodosExist,}) {

    return (
        <div className={styles.todosActionContainer}>
            <Button title="Rest Todos" onClick={resetTodos}>
                <FiRefreshCcw />
            </Button>
            
            <Button
                title="Clear completed Todos"
                onClick={deleteCompletedTodos}
                disabled={!completedTodosExist}
            >
                <RiDeleteBin2Line />
            </Button>
        </div>
    )
}
export default TodosActions
