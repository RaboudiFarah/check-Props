import React from 'react'

const Message = (props) => {
  return (
    <div>
    <button id ="btn" onClick= {()=> props.alertMyInput(`My name is Raboudi Farah `)}  > Click me  </button>
    </div>
  )
}

export default Message
