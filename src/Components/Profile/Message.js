import React from 'react'

const Message = (props) => {
  return (
    <div>
      <button>{()=> props.alertMyInput(`My name is `)} Click Me</button>
    </div>
  )
}

export default Message
