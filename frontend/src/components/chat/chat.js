import React, { useEffect } from 'react'
import {io} from 'socket.io-client'
import Input from '../input/input'
import Messages from '../Messages/message'
import './../../App.css'

const socketEndpoint = 'ws://localhost:8000'



function Chat() {
    
    useEffect(()=> {
        const socket = io(socketEndpoint, {
            withCredentials:false
        })
    },[])
  return (
    <div className='container'>
      <div className='outerContainer'>
        <Messages />
        <Input />
      </div>

    </div>
  )
}

export default Chat