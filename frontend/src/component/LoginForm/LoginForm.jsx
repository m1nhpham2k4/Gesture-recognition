import React from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className="wrapper">  
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" />
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" />
                    <FaLock className="icon"/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="/login">Forgot password?</a >
                </div>

                <button type="sumbit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="/login">Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;