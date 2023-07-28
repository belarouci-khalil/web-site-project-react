import React from 'react'
import './Forgotpass.css'
const Forgotpass = () => {
  return (
    <div className='header'>
     
     <div className='App'>
       <div className='passwrodContainer'>
         <h1>Reset your password</h1>
         <div className='input-container'>
           <label>enter your email</label>
           <input type='text' required/>
           
         </div>
         <button className='Next'>
           <p>Next</p>
         </button>
 
 
       </div>
     </div>
     </div>
  )
}

export default Forgotpass
