import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import {io, Socket} from 'socket.io-client'
import Header from '../header/Header'
import Input from '../input/input'
import Messages from '../Messages/message'
import './../../App.css'

const socketEndpoint = 'ws://localhost:8000'



function Chat() {

  const [message, setMessage] = useState('')

    
    useEffect(()=> {

      // const {name} = queryString.parse(location.search)
      // console.log(name)

        const socket = io(socketEndpoint, {
            withCredentials:false
        })
    },[])

    function sendMessage(e){
      e.preventDefault()

      if(message){
        Socket.emit('sendMessage', message)
      }
    }
  return (
    <div className='container'>
      <div className='outerContainer'>
        <Header />
        <Messages />
        <Input />
      </div>

    </div>
  )
}

export default Chat