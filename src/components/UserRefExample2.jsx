import Todo from './Todo'

import React, { useState } from 'react'


const UserRefExample2 = () => {
  const [showTodo, setShowTodo] = useState(true)


  return (
    <>
      {showTodo && <Todo />}
      <div className='m-8 p-8'>
        <button onClick={() => setShowTodo(!showTodo)} className="btn btn-outline w-full">Show Todo</button>

      </div>
    </>
  )
}



export default UserRefExample2