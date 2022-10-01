import React from 'react'

function TodoItems({ element, deletTask, onComplete }) {
    const { name, fecha, id, completed } = element



    const handleChange = (id) => {
        onComplete(id)
    }

    const handleClick = (id) => {
        deletTask(id)
    }



    return (
        <div className='my-1 bg-fuchsia-300  items-center justify-between 
        grid grid-cols-6 border-b-2 border-indigo-800 gap-2 p-1'>


            <div className='bg-pink-100 '>{fecha}</div>
            <p className='bg-pink-200 col-span-3 overflow-auto'>{name}</p>
            <div className='bg-pink-300'>
                <input type="checkbox"
                    checked={completed}
                    onChange={() => handleChange(id)} />Completed</div>

            <div className='flex flex-row  justify-center '>
                <button className='hover:scale-110 ease-in-out duration-300' onClick={() => handleClick(id)}>
                    <svg width="25px" height="25px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#000000" d="M14,3 C14.5522847,3 15,3.44771525 15,4 C15,4.55228475 14.5522847,5 14,5 L13.846,5 L13.1420511,14.1534404 C13.0618518,15.1954311 12.1930072,16 11.1479,16 L4.85206,16 C3.80698826,16 2.93809469,15.1953857 2.8579545,14.1533833 L2.154,5 L2,5 C1.44771525,5 1,4.55228475 1,4 C1,3.44771525 1.44771525,3 2,3 L5,3 L5,2 C5,0.945642739 5.81588212,0.0818352903 6.85073825,0.00548576453 L7,0 L9,0 C10.0543573,0 10.9181647,0.815882118 10.9945142,1.85073825 L11,2 L11,3 L14,3 Z M11.84,5 L4.159,5 L4.85206449,14.0000111 L11.1479,14.0000111 L11.84,5 Z M9,2 L7,2 L7,3 L9,3 L9,2 Z" />
                    </svg>
                </button>
            </div>


        </div >
    )
}

export default TodoItems

