import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
// 
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