// authService.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

// Signup function
export const signUp = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Login function
export const Login = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
