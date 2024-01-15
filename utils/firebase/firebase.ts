// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA2NUeACQ5WTM1h22RI3ySaOau34x2uboY",
    authDomain: "aspire-job-portal-7cf3a.firebaseapp.com",
    projectId: "aspire-job-portal-7cf3a",
    storageBucket: "aspire-job-portal-7cf3a.appspot.com",
    messagingSenderId: "637365006907",
    appId: "1:637365006907:web:c6978c99fe19e996cf221e",
    measurementId: "G-717CZBQCFR",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;