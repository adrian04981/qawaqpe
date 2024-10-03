// src/Firebase/Firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAmhybXP8hnP2jWUjR0sUs9TUhmIpGxkG8",
  authDomain: "qawaq-5ddb8.firebaseapp.com",
  projectId: "qawaq-5ddb8",
  storageBucket: "qawaq-5ddb8.appspot.com",
  messagingSenderId: "258738249112",
  appId: "1:258738249112:web:22aff2b6d94761e75b5fed",
  measurementId: "G-8W6KFLTLPH"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore, Auth, y Storage
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Exportar los servicios
export { db, auth, storage };
