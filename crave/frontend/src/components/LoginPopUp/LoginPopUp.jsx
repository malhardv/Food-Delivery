import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState("Sign Up")

    return (
        <div className='login-popup'>
            <form action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    { currentState === "Sign Up"
                        ? <input type="text" placeholder='Your Name' required/>
                        : <></>
                    }

                    <input type="email" name="" id="" placeholder='Your Email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By contuining, I agree to the terms of use & Privacy Policy</p>
                </div>
                {currentState === "Login" 
                    ? <p>Create a new account?<span onClick={() => setCurrentState("Sign Up")}>Click Here!</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login Here!</span></p>
                }
                
                
            </form>
        </div>
    )
}

export default LoginPopUp