import {createContext, useReducer} from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItem: () => {},
    deleteItem: () => {}
});

const todoItemsReducer = (state, action) => {
    let newTodoItems = state;
    if (action.type === "NEW_ITEM") {
        return [...state, { name: action.payload.itemName, date: action.payload.itemDueDate }];
    } else if (action.type === "DELETE_ITEM") {
        return state.filter((item) => item.name != action.payload.itemName)
    }
    return newTodoItems;
}

const TodoItemsContextProvider = ({children}) => {
const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

    const addNewItem = (itemName, itemDueDate) => {
        const newItemAction = {
            type: "NEW_ITEM",
            payload: {
                itemName,
                itemDueDate
            }
        }
        dispatchTodoItems(newItemAction);

    }

    const deleteItem = (todoItemName) => {
        const deleteItemAction = {
            type: "DELETE_ITEM",
            payload: {
                itemName: todoItemName
            }
        }
        dispatchTodoItems(deleteItemAction);
    }

    return (
        <TodoItemsContext.Provider value={{
            todoItems,
            addNewItem,
            deleteItem
        }}>{children}</TodoItemsContext.Provider>
    )
}

export default TodoItemsContextProvider;
