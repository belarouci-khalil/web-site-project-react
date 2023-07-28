import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const validEmail = 'test@test.com';
    const validPassword = '12345';

    if (email === validEmail && password === validPassword) {
      setLoggedIn(true);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="container">
        <div className="centered-div">
    <div className="header">
      {loggedIn ? (
        <h2 className='H2'>merhba bik </h2>
      ) : (
        <form className="loginContainer" onSubmit={handleLogin}>
          <h2>Welcome back</h2>
          <div className="input-container">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <a href='/forgotpassword'>Forgot password?</a>
         <a href='/createnewaccount'>Create new account</a>
          <button className='loginBut' type="submit">Login</button>
          <button className='siG'>
           <img
           src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
           alt="Trees"
           height="30"
         />
         <p>Sign in with Google</p>
         </button>
        </form>
      )}
    </div></div></div>
  );
};

export default Login;
