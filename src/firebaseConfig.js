// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importa Firestore desde Firebase
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxuRph8yz4YCAtyow_mTOVJLvvhNtgFeQ",
  authDomain: "portafolio-4bd6b.firebaseapp.com",
  projectId: "portafolio-4bd6b",
  storageBucket: "portafolio-4bd6b.firebasestorage.app",
  messagingSenderId: "171186766848",
  appId: "1:171186766848:web:e1f8a1c2ba17744e3604e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app); // Importa Firestore desde Firebase

export { db }; // Exporta la instancia de Firestore para usarla en otros archivos

