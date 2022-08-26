import React, { useEffect, useState, useRef } from 'react'

import Spinner from './shared/spinner'

const Todo = () => {

  const [loading, setLoading] = useState(true)
  const [todo, setTodo] = useState({})
  const isMounted = useRef(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      // runs when the components is unmounted
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data)
            setLoading(false)
          }
        }, 3000)
      })
    return () => {
      isMounted.current = false
    }
  }, [isMounted])

  return loading ? <Spinner /> : (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{todo.title}</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}


export default Todo