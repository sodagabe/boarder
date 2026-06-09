// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "boarder-f1be6.firebaseapp.com",
  projectId: "boarder-f1be6",
  storageBucket: "boarder-f1be6.firebasestorage.app",
  messagingSenderId: "663773635262",
  appId: "1:663773635262:web:b986cc8339f807ff1c34ef",
};

const app = initializeApp(firebaseConfig);

export default app;
