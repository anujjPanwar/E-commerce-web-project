import React from 'react'
import "./LoginSignup.css"
function LoginSignup() {
  return (
    <div className='login-signup'>
        <div className="login-signup-container">
            <h2>Sign Up</h2>
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' />
            <button>Continue</button>
            <p>Already have an account ? <span>Login here</span></ p>
            <div className="check-box">
                <input type="checkbox" />
                <p>By continuing, i agree to the terms of use and privacy policy.</p>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup