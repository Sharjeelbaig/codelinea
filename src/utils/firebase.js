// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVMTCux7zjwZ9r7WiWBdkt1tZwcEUdmds",
  authDomain: "codelinea-by-sharjeel.firebaseapp.com",
  projectId: "codelinea-by-sharjeel",
  storageBucket: "codelinea-by-sharjeel.appspot.com",
  messagingSenderId: "265651599056",
  appId: "1:265651599056:web:fb709cc430c676df8350d5",
  measurementId: "G-4N51NPLYXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);