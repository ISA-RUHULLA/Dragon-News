// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3V3Z46IVUGmTp8SMXr44tZsyAy8kuQ-0",
  authDomain: "dragon-news-64955.firebaseapp.com",
  projectId: "dragon-news-64955",
  storageBucket: "dragon-news-64955.firebasestorage.app",
  messagingSenderId: "148571976255",
  appId: "1:148571976255:web:68c81539c9632a3af67e8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);