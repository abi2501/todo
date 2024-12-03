import { v4 as uuid } from 'uuid'

const todoReducer = (state, action) => {

    if (action.type === "ADD_TODO") {
        return [...state, {
            "id": uuid(),
            "todoText": action.todoText,
            "editingEnabled": false,
            "status": false
        }];
    }
    else if (action.type === "ENABLE_EDIT") {
        let newTodoList = [...state]
        newTodoList.forEach((todo) => {
            todo.id === action.id ? todo.editingEnabled = true : todo.editingEnabled = false
        });
        return newTodoList;
    }
    else if (action.type === "UPDATE_TODO") {
        let newTodoList = [...state]
        let idx = newTodoList.findIndex(t => t.id === action.id);
        newTodoList[idx] = { ...newTodoList[idx], "todoText": action.todoText, "editingEnabled": false }
        return newTodoList;
    }
    else if (action.type === "UPDATE_TODO_STATUS") {
        let newTodoList = [...state]
        newTodoList.map((todo) => {
            todo.id === action.id ? todo.status = !todo.status : todo.status = todo.status
        })
        return newTodoList;
    }
    else if (action.type === "DELETE_TODO") {
        return [...state].filter(t => t.id != action.id)
    }
    else {
        throw Error('Action not defined: ' + action.type);
    }
}

export default todoReducer