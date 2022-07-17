import React from 'react'

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
    // margin: 'auto'
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
    cursor:'pointer'
    
}


function SingIn() {
  return (
    <div style={mainDiv}>
        <div className='' style={containerDiv}>
            <h1 style={heading}>Join Chat</h1>
            <div className='' style={chatDiv}>
                <input placeholder='Name' required style={inputStyle} />
                <button style={button}>SING IN</button>
            </div>
        </div>
    </div>
  )
}

export default SingIn