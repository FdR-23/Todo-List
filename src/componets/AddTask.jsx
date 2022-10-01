import React from 'react'
import { useState } from 'react'

function AddTask({ addTodo, clearAll }) {
    const [input, setInput] = useState('')


    function handleChange(e) {
        e.preventDefault()
        setInput(e.currentTarget.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (input.trim() !== '') {
            addTodo(input)
        }
        setInput('')

    }
    return (
        <div className='bg-red-600 w-full flex flex-col justify-center align-middle'>
            Escribe una task:
            <form onSubmit={handleSubmit} className="flex flex-row align-middle items-center justify-evenly">
                <input
                    className="rounded-sm "
                    value={input}
                    type="text"
                    onChange={(e) => handleChange(e)}
                />
                <button className='  m-2 inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none
                 focus:ring-0 active:bg-blue-800 active:shadow-lg '>Add Task</button>


            </form>

            <button className='  m-2 inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight 
            uppercase rounded shadow-md
             hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none
                 focus:ring-0 active:bg-blue-800 active:shadow-lg '
                onClick={() => clearAll()}>Clear ALL</button>

        </div>
    )
}

export default AddTask