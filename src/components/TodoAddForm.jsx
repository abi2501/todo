

import React, { useContext, useState } from 'react'
import { TodoContext } from '../App';

function TodoAddForm() {

    const dispatcher = useContext(TodoContext);
    const [todoText, setTodoText] = useState("");

    function changeHandler(e) {
        setTodoText(e.target.value);
    }

    const handleTodoSubmit = (e) => {
        if (e.keyCode === 13) {
            handleAddTodo();
        }
    }

    const handleAddTodo = () => {
        if (todoText.trim()) {
            dispatcher({
                type: "ADD_TODO",
                "todoText": todoText
            });
            setTodoText('');
        } else {
            setTodoText('');
            return
        }
    }

    return (
        <div className='flex flex-wrap flex-row border justify-center p-5 space-y-1'>
            <input type='text' className='sm:w-80 p-2 mx-5' value={todoText} onKeyDown={(e) => handleTodoSubmit(e)} onChange={(e) => changeHandler(e)} placeholder='New Todo ' />
            <button
                className='bg-blue-500 hover:bg-blue-700  text-white rounded p-2'
                onClick={(e) => handleAddTodo(e)}>
                Add Task
            </button>
        </div>
    )
}

export default TodoAddForm
