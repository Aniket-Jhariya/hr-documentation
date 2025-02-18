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
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            if (isSignUp) {
                // Sign up logic
                await signUp(email, password);
                showNotification("Signup successful! Please check your email to verify your account.", "success");
                history.push("/login"); // Redirect to login page after signup
            } else {
                // Login logic
                const user = await signIn(email, password);

                // Check if email is verified
                if (user && !user.emailVerified) {
                    setError("Please verify your email before logging in.");
                    await logout(); // Log out the user if email is not verified
                } else {
                    showNotification("Logged in successfully!", "success");
                    // Redirect to a protected page or home page
                    history.push("/");
                }
            }
        } catch (err) {
            setError(err.message || "Authentication failed");
            showNotification(err.message || "Authentication failed", "error");
        } finally {
            setLoading(false); // Reset loading state
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