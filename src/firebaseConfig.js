// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore}  from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyNGTrcGF-zUtELP4iasUlP37w8OhKv-Q",
  authDomain: "projetlab201-3e2c6.firebaseapp.com",
  projectId: "projetlab201-3e2c6",
  storageBucket: "projetlab201-3e2c6.appspot.com",
  messagingSenderId: "747125641482",
  appId: "1:747125641482:web:fd4327a90eca4746202af3",
  measurementId: "G-CVMNQVVWCX"
};

// Initialize Firebase
export  const FIREBASE_APP = initializeApp(firebaseConfig);
export  const AUTH = getAuth(FIREBASE_APP);
export const db =getFirestore(FIREBASE_APP);



