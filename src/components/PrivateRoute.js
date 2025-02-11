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
            <div>
                <span>Welcome, {user.email}</span>
                <button onClick={logout}>Logout</button>
            </div>
            {children}
        </>
    );
};

export default PrivateRoute;