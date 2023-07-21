// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf6_dg_cMvM14YyzjguZI77mlgKl8rRUY",
  authDomain: "photopholio-ef4e2.firebaseapp.com",
  projectId: "photopholio-ef4e2",
  storageBucket: "photopholio-ef4e2.appspot.com",
  messagingSenderId: "1080331281441",
  appId: "1:1080331281441:web:4c27f59f6c583a3825af60",
  measurementId: "G-PE4ER3XEW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);