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
  
// Get a reference to the Firebase Authentication and Firestore services
var auth = firebase.auth(app);
var db = firebase.firestore(app);
  
// Register form submission
function registerForm() {
  // Get user input
  var name = document.getElementById('name-field').value;
  var email = document.getElementById('email-field').value;
  var password = document.getElementById('password-field').value;

  // Create user with email and password
  auth.createUserWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // Add user's name to the Firebase Authentication profile
      userCredential.user.updateProfile({
        displayName: name
      });

      // Add user to the "users" collection in Firestore
      db.collection("users").doc(userCredential.user.uid).set({
        name: name,
        email: email
      })
      .then(function() {
        // Success message
        alert("Registration successful!");
      })
      .catch(function(error) {
        // Error message
        alert("Error adding user to Firestore: " + error.message);
      });
    })
    .catch(function(error) {
      // Error message
      alert("Error creating user: " + error.message);
    });
}
