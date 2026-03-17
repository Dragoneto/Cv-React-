import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBXBDglgQDqSLZpn8wK0nbWX_clYiy1LoI",
  authDomain: "ab-segqua.firebaseapp.com",
  projectId: "ab-segqua",
  storageBucket: "ab-segqua.firebasestorage.app",
  messagingSenderId: "871400721630",
  appId: "1:871400721630:web:408ca4f0ca37e63de2c64f",
  measurementId: "G-3ZE6SDH46R"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);