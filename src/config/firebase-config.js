// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT-APP-APIKEY,
  authDomain:process.env.REACT-APP-AUTHDOMAIN ,
  projectId: process.env.REACT-APP-PROJECTID,
  storageBucket:process.env.REACT-APP-STORAGEBUCKET ,
  messagingSenderId:process.env.REACT-APP-MESSAGEID,
  appId:process.env.REACT-APP-APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);