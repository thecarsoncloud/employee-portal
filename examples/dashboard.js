// Initialize Firebase
const firebaseConfig = {
    // Your Firebase config here
    apiKey: "AIzaSyAp7M-k4kgSUAfzEZj2p14tnaec2pONbU4",
    authDomain: "ciellie.firebaseapp.com",
    databaseURL: "https://ciellie-default-rtdb.firebaseio.com",
    projectId: "ciellie",
    storageBucket: "ciellie.appspot.com",
    messagingSenderId: "854485873054",
    appId: "1:854485873054:web:dda7ca4484e81ebf1d268f",
    measurementId: "G-W0V11M5Q70"
  };
  
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  // Function to retrieve and display user's name on the dashboard page
  function displayUserName() {
    // Get the current user's ID
    var userId = firebase.auth().currentUser.uid;
    
    // Retrieve the user's name from the database
    database.ref("users/" + userId).once("value")
      .then(function(snapshot) {
        var name = snapshot.val().name;
        document.getElementById("name").innerHTML = name;
      })
      .catch(function(error) {
        console.log(error.message);
      });
  }
  
  // Call displayUserName() function when the page loads
  window.onload = function() {
    displayUserName();
  }
  