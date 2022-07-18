import React from 'react'

// const width = {
//     width:"100%"
// }

// const right = {
//     float:"right",
//     width:"100%"

// }

function Messages() {
  return (
    // <div className='main'>
    // <div className="container">
    //     <img src="./images/profile.png" alt="Avatar" style={width}/>
    //     <p>Hello. How are you today? </p>
    //     <span className="time-right">11:00</span>
    // </div>

    // <div className="container darker">
    //     <img src="./images/profile3.png" alt="Avatar" className="right" style={right} />
    //     <p>Hey! I'm fine. Thanks for asking!</p>
    //     <span className="time-left">11:01</span>
    // </div> 
    // </div>
<>
    <div className='messageMain'>
        <p className='sentText'>user</p>
        <div className='messageBox'>
            <p className=''>text</p>
        </div>
    </div>

    <div className='messageMain start'>
        <div className='messageBox'>
            <p>text</p>
        </div>
        <p className='sentText'>user</p>
    </div>
</>
  )
}

export default Messages