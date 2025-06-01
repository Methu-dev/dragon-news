// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaZB2XmcF4X7m3EsdDEl9ZgUwJkh1NrEA",
  authDomain: "react-dragon-news-auth-1ce68.firebaseapp.com",
  projectId: "react-dragon-news-auth-1ce68",
  storageBucket: "react-dragon-news-auth-1ce68.firebasestorage.app",
  messagingSenderId: "390842764210",
  appId: "1:390842764210:web:11687e4f24289f2a2d72ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app