import React from 'react';

const userInput = (props) => {
  const style = {
    backgroundColor: 'magenta',
    fontSize: '12px'
  }
  return (
  <input style={style} type="text" onChange={props.changed} value={props.userName} />
  )
}

export default userInput