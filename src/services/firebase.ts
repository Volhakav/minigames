import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAzv0MwtlKLjwwi4uvT2B_muIBxc1-36hs",
  authDomain: "minigames-afb1f.firebaseapp.com",
  projectId: "minigames-afb1f",
  storageBucket: "minigames-afb1f.firebasestorage.app",
  messagingSenderId: "611150619783",
  appId: "1:611150619783:web:bf2f5aa380cc3e11f40422",
  measurementId: "G-EKLG6N33YR"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);