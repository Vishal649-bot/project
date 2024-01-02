import React from 'react'
// import Itemlist from './itemlist/Itemlist'
import './showData.css'

const ShowData = (props) => {
  return (
    <ul className="list">
      {props.users.map(user => (
        <li key={user.id}>
        
          {user.name}
          ({user.age} years old)
        
           </li>
        
      ))}
    </ul>
  )
}

export default ShowData
