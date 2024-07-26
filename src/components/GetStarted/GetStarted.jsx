import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './GetStarted.css';

const GetStarted = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/health-wellness");
    };

    const continueAsGuest = () => {
        navigate("/health-wellness");
    };

    return (
        <div className={`get-started ${isLogin ? 'login-bg' : 'signup-bg'}`}>
            <div className="form-container">
                <div className={`form-box ${isLogin ? 'login' : 'signup'}`}>
                    <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <input type="text" placeholder="Full Name" />
                        )}
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        {!isLogin && (
                            <input type="password" placeholder="Confirm Password" />
                        )}
                        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                    </form>
                    <p>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <span onClick={toggleForm} className="toggle-link">
                            {isLogin ? 'Sign Up' : 'Login'}
                        </span>
                    </p>
                    <button onClick={continueAsGuest} className="guest-button">Continue as Guest</button>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;