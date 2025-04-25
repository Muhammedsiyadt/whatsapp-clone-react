import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBABdm0YBd-Fz-bkfvee374ItQFSHVti90",
  authDomain: "whatsapp-clone-37526.firebaseapp.com",
  projectId: "whatsapp-clone-37526",
  storageBucket: "whatsapp-clone-37526.firebasestorage.app",
  messagingSenderId: "594752284703",
  appId: "1:594752284703:web:7d8d771b0780ae10ea4d2a",
  measurementId: "G-6N0MS58VLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }