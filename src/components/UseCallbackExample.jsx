import React, { useState, useCallback, Fragment } from 'react'

const UseCallbackExample = () => {

  const [tasks, setTasks] = useState([])

  // doing the useCallback, the button is not being re-render it's been memoize
  // a long with this entire addTask callback, it will save u some time, i would only reach for something like this if you having some performance issues
  const addTask = useCallback(() => {
    setTasks(prevState => [...prevState, 'this is a new task'])
  }, [setTasks])

  return (
    <>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </>
  )
}

const Button = React.memo(({ addTask }) => {
  console.log('button rendered')

  return (
    <>
      <button className='btn btn-primary' onClick={addTask} >
        Add Tasks
      </button>
    </>
  )
})


export default UseCallbackExample
