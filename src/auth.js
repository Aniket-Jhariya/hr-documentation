import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { useHistory } from "@docusaurus/router";
// require('dotenv-webpack').config()

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,


// 
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  export const signUp = async (email, password) => {
    const allowedDomain = "diacto.com"; // Allowed email domain check

    if (!email.endsWith(`@${allowedDomain}`)) {
        return { success: false, message: `Only users with @${allowedDomain} emails can sign up.` };
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await sendEmailVerification(user);

        return { success: true, message: "Account created successfully! Please check your email to verify your account." };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        if (!user.emailVerified) {
            await logout(); // Log out the user if not verified
            return { success: false, message: "Please verify your email before logging in." };
        }
        return { success: true, message: "Logged in successfully!" };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

export const resendVerificationEmail = async () => {
    const user = auth.currentUser;

    if (user) {
        try {
            await sendEmailVerification(user);
            alert("Verification email sent. Please check your inbox.");
        } catch (error) {
            console.error("Resend Verification Error:", error.message);
            alert(error.message);
        }
    } else {
        alert("No user is currently signed in.");
    }
};
  // Logout Function
  export const logout = () => signOut(auth);
  
  // Listen for Authentication Changes
  export const onAuthChange = (callback) => {
    return onAuthStateChanged(auth, (user) => {
        if (user) {
            // Check if the email is verified
            if (!user.emailVerified) {
                alert("Please verify your email to access the app.");
                logout(); // Log out the user if email is not verified
            } else{
                setTimeout(() => {callback(user), 5000})
            }
        } else {
            callback(null); // No user is signed in
        }
    });
};