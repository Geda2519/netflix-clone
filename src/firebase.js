// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGwF72xCrp7h3tzt_BTlxvp--XSzi7ccs",
    authDomain: "netflix-clone-2c5cc.firebaseapp.com",
    projectId: "netflix-clone-2c5cc",
    storageBucket: "netflix-clone-2c5cc.appspot.com",
    messagingSenderId: "1033035421959",
    appId: "1:1033035421959:web:12e943f0fd90003aa20da2",
    measurementId: "G-42BHN8VVMZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)