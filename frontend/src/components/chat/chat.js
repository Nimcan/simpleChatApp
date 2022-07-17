import React, { useEffect } from 'react'
import {io} from 'socket.io-client'

const socketEndpoint = 'ws://localhost:8000'

function Chat() {
    
    useEffect(()=> {
        const socket = io(socketEndpoint, {
            withCredentials:false
        })
    })
  return (
    <div>Chat</div>
  )
}

export default Chat