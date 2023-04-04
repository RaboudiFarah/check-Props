import React from 'react'

const Photoprofile = (props) => {
  return (
    <div>
    <img id="img" src="Profile.jpg" class="rounded-circle ml-5" width="100"  alt="Profile photo" /> 
    {props.children}
    </div>
  )
}

export default Photoprofile
