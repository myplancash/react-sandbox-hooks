import React, { useRef, useState, useEffect } from 'react'


const UserRefExample1 = () => {

  const numRenders = useRef(1)

  const [name, setName] = useState("")
  const prevName = useRef("") //To see the previous state
  const btnRef = useRef()
  const inputRef = useRef()

  //will increases every time the STATE of the component changes
  useEffect(() => {
    numRenders.current = numRenders.current + 1
    prevName.current = name
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
    inputRef.current.style.backgroundColor = "pink"
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className='card-title'>previous Name: {prevName.current}</h1>
            <h2 className='card-title'>number of renders: {numRenders.current}</h2>
            <div className="form-control">
              <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="label">
                  <span className="label-text">Name</span>
                </label>
                <input ref={inputRef} id="name" type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} value={name} className="input input-bordered" />
                <div className="form-control mt-6">
                  <button type="submit" ref={btnRef} className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
      <p onClick={() => inputRef.current.focus()}>FOCUS THE INPUT </p>
    </div>
  )
}



export default UserRefExample1