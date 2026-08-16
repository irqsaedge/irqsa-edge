import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAuFhdQm3SXcE3fofMw904Fe-LIqFONW3Q",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "irqsaedge-911e1.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "irqsaedge-911e1",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "irqsaedge-911e1.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "201285358560",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:201285358560:web:4f6aef1c88fbee897ed185",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-M3QH4KH02J",
};

export const firebaseApp: FirebaseApp = getApps().length ? getApps()[0]! : initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const realtimeDb = getDatabase(
  firebaseApp,
  import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://irqsaedge-911e1-default-rtdb.firebaseio.com/",
);

export const firebaseProjectId = firebaseConfig.projectId;
