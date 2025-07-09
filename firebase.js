// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5tRSwdnYhpHF2Vvy-l8zgDh1uAaaG90k",
  authDomain: "travessence.firebaseapp.com",
  projectId: "travessence",
  storageBucket: "travessence.firebasestorage.app",
  messagingSenderId: "448795829969",
  appId: "1:448795829969:web:c0bc24e03d046ea9da07f0",
  measurementId: "G-DWMVXYR04T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);