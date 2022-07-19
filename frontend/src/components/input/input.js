import React from 'react'
import './../../App.css'

function Input() {
  
  return (
    <form className='inputForm'>
        <input type='text' placaholder="Message...." className='inp'/>
        <button className='sendBtn'>Send</button>
    </form>
  )
}

export default Input