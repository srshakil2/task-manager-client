// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcOGgZ8dPllUBzNZjQ0aqrBU3p2z38gSU",
  authDomain: "task-managment-100a5.firebaseapp.com",
  projectId: "task-managment-100a5",
  storageBucket: "task-managment-100a5.firebasestorage.app",
  messagingSenderId: "1017891466154",
  appId: "1:1017891466154:web:484d1b876a4db243d0d9d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
