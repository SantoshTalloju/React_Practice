import { useContext, useRef } from 'react';
import styles from './TodoItem.module.css';
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from '../../store/todo-items-store';

function AddTodo() {
    // const [todoName, setTodoName] = useState("");
    // const [todoDueDate, setTodoDueDate] = useState("");
    const {addNewItem} = useContext(TodoItemsContext);

    const todoNameRef = useRef("");
    const todoDueDateRef = useRef("");

    // const handleNameChange = (event) => {
    //     setTodoName(event.target.value);
    // }

    // const handleDueDateChange = (event) => {
    //     setTodoDueDate(event.target.value);
    // }

    const handleAddButtonClick = (event) => {
        event.preventDefault();
        const todoName = todoNameRef.current.value;
        const todoDueDate = todoDueDateRef.current.value;

        todoDueDateRef.current.value = "";
        todoNameRef.current.value = "";
        addNewItem(todoName, todoDueDate);
        // setTodoDueDate("");
        // setTodoName("");
    }

    return (
        <div className="container text-center">
            <form className={`row ${styles["todo-row"]}`}
                onSubmit={handleAddButtonClick}>
                <div className="col-6">
                    <input type="text" ref={todoNameRef} className={`form-control ${styles["todoInput"]}`} placeholder="Enter Todo Here"
                    // value={todoName}
                    // onChange={handleNameChange}
                    />
                </div>
                <div className="col-4">
                    <input type="date" ref={todoDueDateRef} className={`form-control ${styles["todoInput"]}`}
                    // value={todoDueDate}
                    // onChange={handleDueDateChange} 
                    />
                </div>
                <div className="col-2">
                    <button type="submit" className={`btn btn-success ${styles["todo-button"]}`}
                    ><BiMessageAdd /></button>
                </div>
            </form>
        </div>
    )

    // return (
    //     <div className="container text-center">
    //         <div className={`row ${styles["todo-row"]}`}>
    //             <div className="col-6">
    //                 <input type="text" className={`form-control ${styles["todoInput"]}`} placeholder="Enter Todo Here" 
    //                 value={todoName}
    //                 onChange={handleNameChange}/>
    //             </div>
    //             <div className="col-4">
    //                 <input type="date" className={`form-control ${styles["todoInput"]}`} 
    //                 value={todoDueDate}
    //                 onChange={handleDueDateChange} />
    //             </div>
    //             <div className="col-2">
    //                 <button type="button" className={`btn btn-success ${styles["todo-button"]}`} onClick={handleAddButtonClick}><BiMessageAdd /></button>
    //             </div>
    //         </div>
    //     </div>
    // )
}
export default AddTodo;