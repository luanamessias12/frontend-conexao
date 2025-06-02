// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRSb4B3EySAu4w_42vfa5afDL44e18zDs",
  authDomain: "conexao-plataforma.firebaseapp.com",
  projectId: "conexao-plataforma",
  storageBucket: "conexao-plataforma.firebasestorage.app",
  messagingSenderId: "177739802529",
  appId: "1:177739802529:web:5141d00e881c6d20878de0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Correção aqui:
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, app };
