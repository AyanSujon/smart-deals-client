// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuTtJ3xbSZQp6TtlByPoTf1ssYkV1HvIU",
  authDomain: "smart-deals-58620.firebaseapp.com",
  projectId: "smart-deals-58620",
  storageBucket: "smart-deals-58620.firebasestorage.app",
  messagingSenderId: "979160233327",
  appId: "1:979160233327:web:a899844b500563ca94249a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);