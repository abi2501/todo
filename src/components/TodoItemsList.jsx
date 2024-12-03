
import React, { useContext } from 'react'
import TodoList from './TodoList'
import { TodoContext } from '../App';
import TodoEditForm from './TodoEditForm';

function TodoItemsList({ todoList }) {

    const dispatcher = useContext(TodoContext);

    const handleEditMode = (id) => {
        dispatcher({
            type: "ENABLE_EDIT",
            "id": id
        });
    }

    const handleUpdateTodo = (id, todoText) => {
        dispatcher({
            type: "UPDATE_TODO",
            "id": id,
            "todoText": todoText
        });
    }

    const handleDeleteTodo = (id) => {
        dispatcher({
            type: "DELETE_TODO",
            "id": id
        });
    }

    const handleTodoStatus = (id) => {
        console.log("Call dispatcher ", id);
        dispatcher({
            type: "UPDATE_TODO_STATUS",
            "id": id
        });
    }

    return (
        <ul className='h-screen overflow-y-auto'>
            {
                [...todoList].reverse().map((todo) => (
                    todo.editingEnabled ? <TodoEditForm key={todo.id} todo={todo} saveTodo={handleUpdateTodo} />
                        : <TodoList key={todo.id} todo={todo} handleTodoStatus={handleTodoStatus} handleEditMode={handleEditMode} handleDeleteTodo={handleDeleteTodo} />
                ))
            }
        </ul>
    )
}

export default TodoItemsList