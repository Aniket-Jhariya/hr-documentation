import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDveXc-_yrdimq1WVxBjSGaWTrvmmsp5Hc",
    authDomain: "hr-documentation-713a0.firebaseapp.com",
    projectId: "hr-documentation-713a0",
    storageBucket: "hr-documentation-713a0.firebasestorage.app",
    messagingSenderId: "177065906370",
    appId: "1:177065906370:web:cd005001e408abfe336b5b",
    measurementId: "G-9Y4YY076BF"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  // Sign Up Function
  export const signUp = async (email, password) => {
      try {
          await createUserWithEmailAndPassword(auth, email, password);
          alert("Account created successfully!");
      } catch (error) {
          console.error("Signup Error:", error.message);
          alert(error.message);
      }
  };
  
  // Sign In Function
  export const signIn = async (email, password) => {
      try {
          await signInWithEmailAndPassword(auth, email, password);
          alert("Logged in successfully!");
      } catch (error) {
          console.error("Login Error:", error.message);
          alert(error.message);
      }
  };
  
  // Logout Function
  export const logout = () => signOut(auth);
  
  // Listen for Authentication Changes
  export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);