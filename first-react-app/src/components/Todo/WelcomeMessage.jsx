import { useContext } from "react";
import { TodoItemsContext } from "../../store/todo-items-store";

const WelcomeMessage = () => {
    const contextObj = useContext(TodoItemsContext);
    const todoItems = contextObj.todoItems;
    return (
       todoItems.length === 0 && <p> Please add todo items</p>
    )
}
export default WelcomeMessage;