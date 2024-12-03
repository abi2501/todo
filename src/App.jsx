import { useReducer, createContext } from 'react'
import './App.css'
import TodoAddForm from './components/TodoAddForm'
import todoReducer from './reducers/todoReducer'
import TodoItemsList from './components/TodoItemsList'

export const TodoContext = createContext();

function App() {

  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <div className='h-full  mx-auto bg-slate-200'>
      <div className='w-3/4 container h-full content-center mx-auto bg-sky-100'>
        <TodoContext.Provider value={dispatch}>
          <TodoAddForm />
          <TodoItemsList todoList={state} />
        </TodoContext.Provider>
      </div>
    </div>
  )
}

export default App
