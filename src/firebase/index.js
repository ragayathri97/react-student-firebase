// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj4hxHQzTVEJjrRMWEMrgMHELwGU8samY",
  authDomain: "student-crud-89ed9.firebaseapp.com",
  projectId: "student-crud-89ed9",
  storageBucket: "student-crud-89ed9.firebasestorage.app",
  messagingSenderId: "752441805237",
  appId: "1:752441805237:web:308b9c053857d653fbb1fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

const db=getFirestore();
export {db};