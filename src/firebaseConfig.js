
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqy8XA7lZrgFQ6_rQXfSwKXXXHw70a5Tc",
  authDomain: "proyectofinal-matiasm.firebaseapp.com",
  projectId: "proyectofinal-matiasm",
  storageBucket: "proyectofinal-matiasm.appspot.com",
  messagingSenderId: "539396383629",
  appId: "1:539396383629:web:71df75be420fc765ce93c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)