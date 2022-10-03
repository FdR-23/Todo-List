import React, { useReducer, useState } from 'react'
import TodoList from './componets/TodoList';
import Navbar from './componets/Navbar';
import todoReducer, { initialState } from './Reducer/todoReducer.js'
import { TYPE } from './Actions/todoActions.js'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const [id, setId] = useState(0);



  const addTodo = (newTask) => {
    setId(id + 1);
    newTask = { id: id, name: newTask, fecha: new Date().toLocaleDateString(), completed: false }
    dispatch({
      type: TYPE.ADD_TASK
      , payload: newTask
    })
  }
  const onCompleteTask = (id) => {
    const findTask = state.todo.find(element => element.id === id)
    if (findTask.completed === false) {
      findTask.completed = true
      dispatch({
        type: TYPE.CHANGE_STATUS,
        payload: findTask,

      })
    } else {
      findTask.completed = false
      dispatch({
        type: TYPE.CHANGE_STATUS,
        payload: findTask,

      })
    }
  }
  const clearAll = () => {
    dispatch({
      type: TYPE.CLEAR_ALL
    })
  }

  const deletTask = (id) => {
    const findTask = state.todo.find(element => element.id === id)
    if (findTask.completed === false) {
      alert(`TAREA N°: ${id} NO COMPLETADA `)
    } else {
      dispatch({
        type: TYPE.REMOVE_TASK
        , payload: id
      })
    }
  }

  const deletAllCompleteTask = () => {
    const findTasksCompleted = state.todo.filter(element => element.completed === true)

    if (findTasksCompleted.length === 0) {
      alert("NO HAY TAREAS COMPLETADAS")
    }
    dispatch({
      type: TYPE.REMOVE_ALL_COMPLETED_TASKS
      , payload: true
    })

  }

  return (
    <div className='w-11/12 m-auto my-7 flex flex-col  items-center   '>
      <Navbar
        addTodo={addTodo}
        clearAll={clearAll}
        deletAllCompleteTask={deletAllCompleteTask} 
        />

      <TodoList tasks={state.todo}
        deletTask={deletTask}
        onCompleteTask={onCompleteTask} />


    </div>
  );
}

export default App;
