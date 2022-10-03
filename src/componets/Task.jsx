import React from 'react'
import { useState } from 'react'

function Task({ addTodo, clearAll, deletAllCompleteTask }) {
    const [input, setInput] = useState('')


    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(input === ''){
            alert("PLEASE WRITE A TASK")
        }
        else if (input.trim() !== '') {
            addTodo(input)
        }
        setInput('')
    }
    return (
        <div className='flex flex-col w-full bg-stone-600/10 rounded-sm'>
            <div className='flex flex-col m-2 items-center align-middle justify-center'>
                <p></p>

                <form onSubmit={handleSubmit}
                    className="flex flex-row align-middle items-center ">
                    <input
                        className="border-2 border-stone-300 rounded-md"
                        placeholder='Write a task here'
                        value={input}
                        type="text"
                        onChange={(e) => handleChange(e)}
                    />
                    <button className='font-semibold inline-block m-2  px-3 py-1 bg-slate-500 text-white  text-xs uppercase rounded 
             hover:bg-slate-700 '>Add Task</button>
                </form>
            </div>
            <div className='flex flex-row  justify-evenly'>
                <button className='inline-block m-2  px-3 py-2 bg-slate-500 text-white  text-xs uppercase rounded 
             hover:bg-slate-700 hover:shadow-lg '
                    onClick={() => clearAll()}>Clear ALL</button>

                <button className='inline-block m-2  px-3 py-2 bg-slate-500 text-white  text-xs uppercase rounded 
             hover:bg-slate-700 hover:shadow-lg '
                    onClick={() => deletAllCompleteTask()}>remove all completed</button>

            </div>
        </div>
    )
}

export default Task