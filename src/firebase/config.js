// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpdKhq_xWqT7cJVVDgm7L6FnMFhA4Fjyk",
  authDomain: "task-manager-f9828.firebaseapp.com",
  projectId: "task-manager-f9828",
  storageBucket: "task-manager-f9828.firebasestorage.app",
  messagingSenderId: "102369869832",
  appId: "1:102369869832:web:71d0b4fde0de5b5c3751bd",
  measurementId: "G-H0ZG8WPZBS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//auth
export const auth = getAuth();
