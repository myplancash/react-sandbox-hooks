import React, { useMemo, useState, useEffect, useRef } from 'react'


const UseMemoExample = () => {

  const [number, setNumber] = useState(1)
  const renders = useRef(1)
  const [inc, setInc] = useState(0)

  //Let's memoize the getSqrt funcitonm useMemo, useCallback, and useEffect have the same argumetns

  const sqrt = useMemo(() => getSqrt(number), [number])



  useEffect(() => {
    renders.current = renders.current + 1
  })

  const ClickHandler = (e) => {
    setInc((prevState) => {
      console.log(prevState + 1)
      return prevState + 1
    })
  }

  return (
    <div>
      <input
        className='form-control w-25'
        type='number'
        onChange={(e) => setNumber(e.target.value)}
        value={number}
        id='number'
      />

      <h2 className="my-3">
        the square root of {number} is {sqrt}
      </h2>

      <button className='btn btn-primary' onClick={ClickHandler}>Re-RENDER</button>
      <h3>Renders: {renders.current}</h3>
    </div>
  )
}

function getSqrt(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i)
  }
  console.log("expensive func called")
  return Math.sqrt(n)
}


export default UseMemoExample