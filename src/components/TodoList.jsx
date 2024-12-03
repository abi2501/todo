
import React, { useContext } from 'react'


function TodoList({ todo, handleTodoStatus, handleEditMode, handleDeleteTodo }) {

    return (
        <li key={todo.id} className='flex fled-row flex-wrap justify-evenly py-3'>
            <div className='grid  col-span-4 sm:grid-cols-2'>
                <div className='flex flex-wrap flex-row space-x-2'>
                    <input type='checkbox' className='sm:w-5 cursor-pointer' onChange={() => handleTodoStatus(todo.id)} />
                    <p className='w-60 content-center break-words'>{todo.todoText}</p>
                </div>
                <div className='space-x-1 ml-auto flex flex-wrap flex-row content-center'>
                    <span className={`text-center rounded text-blue-700 p-2  ${todo.status ? "bg-green-100" : "bg-yellow-200"}`}>
                        {
                            todo.status ? "Completed" : "Progress"
                        }
                    </span>
                    <button className='bg-red-400 hover:bg-red-500 p-2 text-white rounded' onClick={() => handleEditMode(todo.id)}>Edit</button>
                    <button className='bg-gray-400 hover:bg-gray-500 p-2 text-white rounded' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                </div>
            </div>
        </li>
    )
}

export default TodoList