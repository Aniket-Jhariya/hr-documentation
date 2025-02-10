import React, { useState } from "react";
import { signIn, signUp } from "../auth";
import "./LoginForm.css";

const EmailLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            if (isSignUp) {
                await signUp(email, password);
            } else {
                await signIn(email, password);
            }
        } catch (err) {
            setError(err.message || "Authentication failed");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>{isSignUp ? "Create Account" : "Welcome Back"}</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="submit-btn">
                        {isSignUp ? "Sign Up" : "Login"}
                    </button>
                </form>
                <div className="toggle-mode">
                    <button onClick={() => setIsSignUp(!isSignUp)}>
                        {isSignUp 
                            ? "Already have an account? Login" 
                            : "Create a new account"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmailLoginForm;