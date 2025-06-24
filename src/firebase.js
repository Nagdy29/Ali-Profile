import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD4IZ9ic3PVbjIcS-ypFetI3USwzRaCLb8",
  authDomain: "profile-3bd6b.firebaseapp.com",
  projectId: "profile-3bd6b",
  storageBucket: "profile-3bd6b.appspot.com", // ✅ هنا كنت كاتبها غلط
  messagingSenderId: "1033657236031",
  appId: "1:1033657236031:web:fb18233a7b72ab2821168a",
  measurementId: "G-8DCG7RZ66K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // ✅ ده المهم علشان الطلبات
const analytics = getAnalytics(app);

export { db };
