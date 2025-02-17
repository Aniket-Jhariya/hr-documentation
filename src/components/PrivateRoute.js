import React, { useState, useEffect } from "react";
import { onAuthChange, logout } from "../auth"; // Import logout if needed
import EmailLoginForm from "@site/src/components/EmailLoginForm";
import { useHistory } from "@docusaurus/router"; // For navigation

const PrivateRoute = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const history = useHistory(); // For redirecting after signup

    useEffect(() => {
        const unsubscribe = onAuthChange((user) => {
            setUser(user);
            setLoading(false);

            // Redirect to login after signup (if user is not verified)
            if (user && !user.emailVerified) {
                history.push("/login"); // Redirect to login page
            }
        });

        return () => unsubscribe();
    }, [history]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return <EmailLoginForm />; // Show login form if user is not authenticated
    }

    // If user is authenticated and email is verified, show the protected content
    return (
        <>
            <div style={styles.header}>
                <span style={styles.welcomeText}>Logged in- <span style={styles.userText}>{user.email}</span></span>
                <button style={styles.logoutButton} onClick={logout}>
                    Logout
                </button>
            </div>
            {children}
        </>
    );
};

export default PrivateRoute;

// CSS-in-JS styles
const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.25rem",
        backgroundColor: "rgb(106, 74, 203) ",
        borderBottom: "1px solid rgb(0,0,0)"
    },
    userText: {
        fontSize: "0.75rem",
        fontWeight:"600",
        color: "rgb(135, 168, 246)",
    },
    welcomeText:{
        fontWeight:"750",
        fontSize:"0.75rem",
        color:"rgb(57, 57, 57)"
    },
    logoutButton: {
        padding: "0.5rem 0.5rem",
        fontSize: "0.75rem",
        fontWeight: "600",
        color: "#fff",
        backgroundColor: "rgb(186, 160, 243)", // Red color for logout
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "background-color 0.3s ease, transform 0.2s ease",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
};