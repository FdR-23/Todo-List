import React from 'react'

function TodoItems({ element, deletTask, onCompleteTask }) {
    const { name, id, completed } = element



    const handleChange = (id) => {
        onCompleteTask(id)

    }

    const handleClick = (id) => {
        deletTask(id)
    }



    return (
        <div className='grid grid-cols-6 gap-1 my-2  bg-stone-50/50 p-1 rounded-sm'>


            <div className='flex items-center justify-center font-alumni text-2xl text-slate-800'># {id}</div>

            <div className=' flex items-center justify-center col-span-3 overflow-auto font-semibold'>{name}</div>

            <div className='flex items-center justify-center'>
                <button type="checkbox"
                    onClick={() => handleChange(id)}>
                    {completed === true ?
                        <svg className="fill-green-500" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 330 330" width="24px" height="24px" >
                            <path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300
		                        c-74.44,0-135-60.561-135-135S90.56,30,165,30s135,60.561,135,135S239.439,300,165,300z"/>
                            <path d="M226.872,106.664l-84.854,84.853l-38.89-38.891c-5.857-5.857-15.355-5.858-21.213-0.001
		                        c-5.858,5.858-5.858,15.355,0,21.213l49.496,49.498c2.813,2.813,6.628,4.394,10.606,4.394c0.001,0,0,0,0.001,0
		                        c3.978,0,7.793-1.581,10.606-4.393l95.461-95.459c5.858-5.858,5.858-15.355,0-21.213
		                        C242.227,100.807,232.73,100.806,226.872,106.664z"/>
                        </svg> :
                        <svg className="fill-red-500" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 330 330" width="24px" height="24px" >

                            <path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300
                                c-74.44,0-135-60.561-135-135S90.56,30,165,30s135,60.561,135,135S239.439,300,165,300z"/>
                            <path d="M226.872,106.664l-84.854,84.853l-38.89-38.891c-5.857-5.857-15.355-5.858-21.213-0.001
                                c-5.858,5.858-5.858,15.355,0,21.213l49.496,49.498c2.813,2.813,6.628,4.394,10.606,4.394c0.001,0,0,0,0.001,0
                                c3.978,0,7.793-1.581,10.606-4.393l95.461-95.459c5.858-5.858,5.858-15.355,0-21.213
                                C242.227,100.807,232.73,100.806,226.872,106.664z"/>

                        </svg>}
                </button>


            </div>

            <div className='flex flex-row  items-center justify-center '>
                <button className='hover:scale-110 ease-in-out duration-300' onClick={() => handleClick(id)}>
                    <svg width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#000000" d="M14,3 C14.5522847,3 15,3.44771525 15,4 C15,4.55228475 14.5522847,5 14,5 L13.846,5 L13.1420511,14.1534404 C13.0618518,15.1954311 12.1930072,16 11.1479,16 L4.85206,16 C3.80698826,16 2.93809469,15.1953857 2.8579545,14.1533833 L2.154,5 L2,5 C1.44771525,5 1,4.55228475 1,4 C1,3.44771525 1.44771525,3 2,3 L5,3 L5,2 C5,0.945642739 5.81588212,0.0818352903 6.85073825,0.00548576453 L7,0 L9,0 C10.0543573,0 10.9181647,0.815882118 10.9945142,1.85073825 L11,2 L11,3 L14,3 Z M11.84,5 L4.159,5 L4.85206449,14.0000111 L11.1479,14.0000111 L11.84,5 Z M9,2 L7,2 L7,3 L9,3 L9,2 Z" />
                    </svg>
                </button>
            </div>


        </div >
    )
}

export default TodoItems

