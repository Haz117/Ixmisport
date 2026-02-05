// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALV_FpNejQaGyfbyMUbjZn-mLK7bz52z4",
  authDomain: "ixmis-f5c50.firebaseapp.com",
  projectId: "ixmis-f5c50",
  storageBucket: "ixmis-f5c50.firebasestorage.app",
  messagingSenderId: "435414619051",
  appId: "1:435414619051:web:c795d48c970ecd447b38ee",
  measurementId: "G-0ZTD4JEKE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };
