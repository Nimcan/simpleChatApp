import React, { useState } from 'react'
// import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

const mainDiv = {
    backgroundColor:'#1A1A1D',
    

}

const heading = {
    color: "white",
    textAlign:'center',
    textDecoration:'underline',
    // lineHeight:'12px'
}

const containerDiv = {
    maxWidth:'300px',
    // backgroundColor:'white',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    margin:'auto',
    height:'100vh'
}

const chatDiv = {
    // maxWidth:'300px',
    display:'flex',
    marginTop:'5px',
    flexDirection:'column',
    gap:'4px',
}

const inputStyle = {
    margin: '3px 5px',
    // height:'2rem',
    padding:'10px',
    borderRaduis:'3px',
    ouline:'none',
}

const button = {
    margin: '3px 3px',
    padding:'10px',
    borderRaduis:'3px',
    backgroundColor:'#A5FAD1',
    fontWiegth:'bold',
    fontWeight:'bold',
    fontSize:'15px',
    cursor:'pointer',
    textAlign:'center'
    
}


function SingIn() {
    const [user, setUser] = useState([])

    // const history = useHistory()

    function login(){
        // history.push("/chat")
    }
  return (
    <div style={mainDiv}>
        <div className='' style={containerDiv}>
            <h1 style={heading}>Join Chat</h1>
            <div className='' style={chatDiv}>
                <input placeholder='Name' required style={inputStyle} onChange={e=> setUser(e.target.value)} />
                <Link to={`/chat?name=${user}`} style={button}>
                    SING IN
                {/* <button style={button} onClick={login}></button> */}
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SingIn