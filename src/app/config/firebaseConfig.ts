import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyD3L-_evAIfGFPA2ccOlTYfoAjQ-tJcE4c",
    authDomain: "megamouse-392914.firebaseapp.com",
    projectId: "megamouse-392914",
    storageBucket: "megamouse-392914.appspot.com",
    messagingSenderId: "1013806325640",
    appId: "1:1013806325640:web:f3883835576e9a521ca43d",
    measurementId: "G-E2990EE4VS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
    