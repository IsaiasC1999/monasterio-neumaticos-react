// import { initializeApp } from 'firebase/app'
// import 'firebase/firestore'
// import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';

import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDJbJNCDZNjWRNIO8vHM2KS5Y8XFB5Z5bc",
    authDomain: "monasterio-neumaticos.firebaseapp.com",
    projectId: "monasterio-neumaticos",
    storageBucket: "monasterio-neumaticos.appspot.com",
    messagingSenderId: "345513800345",
    appId: "1:345513800345:web:4dec170716beb5ebc47e08",
    measurementId: "G-EGG0BFSQLS"
};

// Initialize Firebase

// const app = initializeApp(firebaseConfig)

//  export const db = getFirestore(app);

// console.log("hola firebase");


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default db;