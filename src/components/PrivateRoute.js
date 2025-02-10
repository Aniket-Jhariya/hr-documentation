import React, { useState, useEffect } from "react";
import { onAuthChange, login } from "../auth";
import EmailLoginForm from "@site/src/components/EmailLoginForm";
const PrivateRoute = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthChange((user) => {
            setUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (loading) return <p>Loading...</p>;

    if (!user) {
        return (
            <div>
            {user ? (
                <>
                    <span>Welcome, {user.email}</span>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <EmailLoginForm />
            )}
        </div>
        );
    }

    return children;
};

export default PrivateRoute;
