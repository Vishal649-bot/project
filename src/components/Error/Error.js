import React from 'react'
import './Error.css'
const Error = (props) => {
  return (
    <div className='overlay'>
    <div className="main">
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <button onClick={props.onConfirm}>Okay</button>
      </div>
    </div>
  )
}

export default Error
