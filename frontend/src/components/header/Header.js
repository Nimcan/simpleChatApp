import React from 'react'
import './../../App.css'

function Header({name}) {
  return (
    <div className='headerContainer'>
        <div className=''>
            <p>{name}</p>
        </div>
    </div>
  )
}

export default Header