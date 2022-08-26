import React from 'react'
import spinner from '../../assets/spinner.gif'


const Spinner = () => {
  return (
    <div className='p-5 m-5'>
      <img src={spinner} style={{ display: "block", width: "50px", margin: "auto" }} alt="loading..." />
    </div>
  )
}


export default Spinner