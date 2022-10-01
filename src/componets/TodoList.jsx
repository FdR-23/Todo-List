import React from 'react'
import TodoItems from './TodoItems'



function TodoList({ tasks, deletTask, onComplete }) {




    return (
        <div className='bg-red-200 w-full my-2 p-2'>
            <div className='grid grid-cols-6 border-b-2 border-indigo-800'>
                <p className="bg-blue-100 ">Date</p>
                <p className="bg-blue-200 col-span-3 ">Name Task</p>
                <p className="bg-blue-300">Status</p>
                <p className="bg-blue-400">Remove</p></div>
            {tasks && tasks.map((element, index) =>
                <TodoItems
                    key={index}
                    element={element}
                    deletTask={deletTask}
                    onComplete={onComplete}
                />)


            }

        </div>
    )
}

export default TodoList