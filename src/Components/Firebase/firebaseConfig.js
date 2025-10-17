// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOrDD25e2gyOBUs0xZJCwqWvp2sdtNM84",
  authDomain: "loginsignup-5b4ec.firebaseapp.com",
  projectId: "loginsignup-5b4ec",
  storageBucket: "loginsignup-5b4ec.firebasestorage.app",
  messagingSenderId: "478132818423",
  appId: "1:478132818423:web:9ab4c8a5c7e832422a9ef2",
  measurementId: "G-RLJ7QPYH76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAnalytics(app);

export const auth = getAuth(app);        // 👈 You use this for login/signup
const analytics = getAnalytics(app); 