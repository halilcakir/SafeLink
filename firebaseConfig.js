// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcKExpOuvHkgQxxwTasK79AaTKcYNKbwI",
  authDomain: "safelink-6871a.firebaseapp.com",
  projectId: "safelink-6871a",
  storageBucket: "safelink-6871a.firebasestorage.app",
  messagingSenderId: "285322256125",
  appId: "1:285322256125:web:cebabb4284cbae0aa1a894"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

export default app