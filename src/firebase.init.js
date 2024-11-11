// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZi0qqmtXwB0f3XGtN48b6JcOgihNQPIk",
    authDomain: "fir-auth-projects-25b2c.firebaseapp.com",
    projectId: "fir-auth-projects-25b2c",
    storageBucket: "fir-auth-projects-25b2c.firebasestorage.app",
    messagingSenderId: "144766616328",
    appId: "1:144766616328:web:5c3cfa1a2eff3f8255a2bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);