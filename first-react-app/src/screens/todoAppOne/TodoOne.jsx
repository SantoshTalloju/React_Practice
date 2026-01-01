import ToDoTitle from "../../components/Todo/ToDoTitle.jsx";
import AddTodo from "../../components/Todo/AddTodo.jsx";
import TodoItems from "../../components/Todo/TodoItems.jsx";
import WelcomeMessage from "../../components/Todo/WelcomeMessage.jsx";
import TodoItemsContextProvider from "../../store/todo-items-store.jsx";

function ToDoOne() {
    // const [todoItems, setTodoItems] = useState([]);
    // const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

    // const addNewItem = (itemName, itemDueDate) => {
    //     // const newTodoItems = [...todoItems, { name: itemName, date: itemDueDate }];
    //     // setTodoItems((currentValue) => {
    //     //     const newTodoItems = [...currentValue, { name: itemName, date: itemDueDate }];
    //     //     return newTodoItems;
    //     // });

    //     // setTodoItems((prevValue) => [...prevValue, { name: itemName, date: itemDueDate }]);

    //     //using reducer
    //     const newItemAction = {
    //         type: "NEW_ITEM",
    //         payload: {
    //             itemName,
    //             itemDueDate
    //         }
    //     }
    //     dispatchTodoItems(newItemAction);

    // }

    // const deleteItem = (todoItemName) => {
    //     // const newTodoItems = todoItems.filter((item) => item.name != todoItemName)
    //     //setTodoItems(newTodoItems);


    //     // setTodoItems((prevValue) => prevValue.filter((item) => item.name != todoItemName));

    //     //using reducer
    //     const deleteItemAction = {
    //         type: "DELETE_ITEM",
    //         payload: {
    //             itemName: todoItemName
    //         }
    //     }
    //     dispatchTodoItems(deleteItemAction);
    // }

    return (
        <TodoItemsContextProvider>
            <center className="todo-container">
                <ToDoTitle />
                <AddTodo />
                <WelcomeMessage />
                <TodoItems />
            </center>
        </TodoItemsContextProvider>
    )
}

export default ToDoOne;