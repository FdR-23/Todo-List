import React from 'react'
import TodoItems from './TodoItems'



function TodoList({ tasks, deletTask, onCompleteTask }) {




    return (
        <div className='bg-slate-900/10 rounded-sm w-full h-full my-2 p-2'>
            <div className='grid grid-cols-6 border-b-2 border-stone-700 text-center font-semibold text-sm'>
                <p className="mb-1"># Task</p>
                <p className="mb-1 col-span-3">Name Task</p>
                <p className="mb-1">Status</p>
                <p className="mb-1">Remove</p></div>
            {tasks && tasks.map((element, index) =>
                <TodoItems
                    key={index}
                    element={element}
                    deletTask={deletTask}
                    onCompleteTask={onCompleteTask}
                />)


            }

        </div>
    )
}

export default TodoList