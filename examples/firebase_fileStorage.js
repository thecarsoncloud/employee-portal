// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp7M-k4kgSUAfzEZj2p14tnaec2pONbU4",
  authDomain: "ciellie.firebaseapp.com",
  databaseURL: "https://ciellie-default-rtdb.firebaseio.com",
  projectId: "ciellie",
  storageBucket: "ciellie.appspot.com",
  messagingSenderId: "854485873054",
  appId: "1:854485873054:web:dda7ca4484e81ebf1d268f",
  measurementId: "G-W0V11M5Q70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);