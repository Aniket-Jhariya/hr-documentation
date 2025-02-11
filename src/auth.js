import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
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
  
  // Sign Up Function
  export const signUp = async (email, password) => {
    const allowedDomain = "diacto.com"; // Replace with your allowed domain

    // Check if the email domain is allowed
    if (!email.endsWith(`@${allowedDomain}`)) {
        alert(`Only users with @${allowedDomain} emails are allowed to sign up.`);
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Send verification email
        await sendEmailVerification(user);
        alert("Account created successfully! Please check your email to verify your account.");
    } catch (error) {
        console.error("Signup Error:", error.message);
        alert(error.message);
    }
};
  
  // Sign In Function
  export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Check if the email is verified
        if (!user.emailVerified) {
            alert("Please verify your email before logging in.");
            await logout(); // Log out the user if email is not verified
            return;
        }

        alert("Logged in successfully!");
    } catch (error) {
        console.error("Login Error:", error.message);
        alert(error.message);
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
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // Check if the email is verified
            if (!user.emailVerified) {
                alert("Please verify your email to access the app.");
                logout(); // Log out the user if email is not verified
            } else {
                callback(user); // Proceed if email is verified
            }
        } else {
            callback(null); // No user is signed in
        }
    });
};