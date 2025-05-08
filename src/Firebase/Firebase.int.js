// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC14UQWY380EieiDShfkgsCgYcpXMyOl_8",
    authDomain: "news-paper-877e4.firebaseapp.com",
    projectId: "news-paper-877e4",
    storageBucket: "news-paper-877e4.firebasestorage.app",
    messagingSenderId: "307335321614",
    appId: "1:307335321614:web:49302563788f8bf1a7445f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);