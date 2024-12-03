import React, { useState } from 'react'

function TodoEditForm({ todo, saveTodo }) {

    const [todoValue, setTodoValue] = useState(todo.todoText)

    const handleSaveTodo = () => {
        if (todoValue.trim()) {
            saveTodo(todo.id, todoValue);
            setTodoValue('');
        }
        else {
            return
        }
    }

    return (
        <li key={todo.id} className='flex fled-row flex-wrap justify-evenly py-3'>
            <div className='flex flex-wrap flex-row space-x-1'>
                <input type='text' className='w-80 border-none p-2 mx-5 my-3' value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white rounded my-3 mx-2 p-2'
                    onClick={handleSaveTodo}>
                    Save
                </button>
                <button className='bg-gray-400 hover:bg-gray-500 text-white rounded my-3 mx-2 p-2' onClick={handleSaveTodo}>Cancel</button>
            </div>
        </li>
    )
}

export default TodoEditForm