import React, { useState } from "react";
import { signIn, signUp, logout } from "../auth"; // Import logout for email verification check
import { useHistory } from "@docusaurus/router"; // For navigation
import "./LoginForm.css";

const EmailLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // Loading state
    const [notification, setNotification] = useState(null); // Notification state
    const history = useHistory(); // For navigation

    const showNotification = (message, type = "info") => {
        // First remove any existing notification to prevent stacking
        setNotification(null);
        
        // Small delay to ensure state is updated before showing new notification
        setTimeout(() => {
            setNotification({ message, type });
            
            // Log for debugging
            console.log(`Showing ${type} notification: ${message}`);
        }, 50);
        
        // Clear notification after 3 seconds
        setTimeout(() => setNotification(null), 3000);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
    
        try {
            let response;
            if (isSignUp) {
                response = await signUp(email, password);
            } else {
                response = await signIn(email, password);
            }
            // Check if the operation was successful before showing success notification
            if (response && (response.success === true || response.success === "true")) {
                // Explicit success message
                const successMessage = isSignUp ? "Account created successfully!" : "Login successful!";
                showNotification(successMessage, "success");
                
                // Only redirect after successful login
                if (!isSignUp) {
                    history.push("/hr-documentation/intro");
                        // Reduced to match animation timing
                }
            } else {
                // Handle case where response exists but success is false
                const errorMsg = response?.message || "Operation failed";
                showNotification(errorMsg, "error");
            }
        } catch (err) {
            console.error("Auth error:", err);
            showNotification(err?.message || "Authentication failed", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            {/* Notification Overlay */}
            {notification && (
                <div className={`notification ${notification.type}`}>
                    {notification.message}
                </div>
            )}

            <div className="login-card">
                <h2>{isSignUp ? "Create Account" : "Welcome"}</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            className="form-input"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-input"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? "Processing..." : isSignUp ? "Sign Up" : "Login"}
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