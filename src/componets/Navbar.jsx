import React from 'react'
import Task from './Task.jsx';
function Navbar({ addTodo, clearAll, deletAllCompleteTask }) {
    return (
        <header className='w-full flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-semibold m-2'>To-Do List</h1>
            <Task 
                addTodo={addTodo}
                clearAll={clearAll}
                deletAllCompleteTask={deletAllCompleteTask}
            />
        </header >

    )
}

export default Navbar