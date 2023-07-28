import React from 'react'
import './Createnewaco.css'

const Createnewaco = () => {
  return (
<div className='header'>
     
     <div className='App'>
       <div className='SingnupContainer'>
         <h1>Sign Up</h1>
         <div className='input-container'>
           <label>Username</label>
           <input type='text' required/>
         </div>
         <div className='input-container'>
           <label>Email</label>
           <input type='email' required/>
         </div>
         <div className='input-container'>
           <label>Password</label>
           <input type='password' required/>
           
         </div>
         <div className='input-container'>
           <label>Confirm Password</label>
           <input type='password' required/>
           
         </div>

         <a href='/Login'>Sign In</a>
         <button className='SingnupBut'>
           <p>Sign Up</p>
         </button>
         <button className='siG'>
           <img
           src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
           alt="Trees"
           height="30"
         />
         <p>Sign in with Google</p>
         </button>
 
       </div>
     </div>
     </div>
  )
}

export default Createnewaco
