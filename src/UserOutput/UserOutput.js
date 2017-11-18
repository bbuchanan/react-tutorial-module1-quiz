import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Hello</p>
      <p>There</p>
      <p>{props.userName}</p>
    </div>
    )
  
}

export default userOutput