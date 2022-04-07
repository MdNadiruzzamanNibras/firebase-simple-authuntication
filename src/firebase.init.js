// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEEZOiE2eBXVKKXhKFcyGv659gw70rfl0",
  authDomain: "fir-simple-authuntication.firebaseapp.com",
  projectId: "fir-simple-authuntication",
  storageBucket: "fir-simple-authuntication.appspot.com",
  messagingSenderId: "1047192926541",
  appId: "1:1047192926541:web:97e35703d7dfd8719fdf04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;