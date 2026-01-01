import { useContext } from 'react';
import styles from './TodoItem.module.css';
import { AiFillDelete } from "react-icons/ai";
import { TodoItemsContext } from '../../store/todo-items-store';

function TodoItem({ todoName, todoDate }) {
    const { deleteItem } = useContext(TodoItemsContext);
    
    return (
        <div className="container">
            <div className={`row ${styles["todo-row"]}`}>
                <div className="col-6">
                    {todoName}
                </div>
                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2">
                    <button type="button" className={`btn btn-danger ${styles["todo-button"]}`}
                    onClick={() => deleteItem(todoName)}><AiFillDelete/></button>
                </div>
            </div>
        </div>
    )
}
export default TodoItem;