import React, { useReducer } from 'react'
import TodoList from './componets/TodoList';
import AddTask from './componets/AddTask';
import Navbar from './componets/Navbar';
import todoReducer, { initialState } from './Reducer/todoReducer.js'
import { TYPE } from './Actions/todoActions.js'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const clearAll = () => {
    dispatch({
      type: TYPE.CLEAR_ALL
    })
  }
  const onComplete = (id) => {
    const findTask = state.todo.find(element => element.id === id)
    if (findTask.completed === false) {
      findTask.completed = true
      dispatch({
        type: TYPE.CHANGE_STATUS,
        payload: findTask,
       
      })
    }
    
  }
  const addTodo = (newTask) => {
    newTask = { id: +new Date(), name: newTask, fecha: new Date().toLocaleDateString(), completed: false }
    dispatch({
      type: TYPE.ADD_TASK
      , payload: newTask
    })
  }
  const deletTask = (id) => {
    const findTask = state.todo.find(element => element.id === id)
    if (findTask.completed === false) {
      alert("TAREA NO COMPLETADA")
    } else {
      dispatch({
        type: TYPE.REMOVE_TASK
        , payload: id
      })
    }
  }
  return (
    <div className='w-6/12 h-screen m-auto  my-2 flex flex-col  items-center '>
      <Navbar></Navbar>
{console.log(state.todo)}
      <AddTask
        addTodo={addTodo}
        clearAll={clearAll}
      />
      <TodoList tasks={state.todo}
        deletTask={deletTask}
        onComplete={onComplete} />


    </div>
  );
}

export default App;
