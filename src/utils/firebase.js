// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "portsaidcity-app.firebaseapp.com",
  projectId: "portsaidcity-app",
  storageBucket: "portsaidcity-app.appspot.com",
  messagingSenderId: "679907336030",
  appId: "1:679907336030:web:8ff2810764ea12830879cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);