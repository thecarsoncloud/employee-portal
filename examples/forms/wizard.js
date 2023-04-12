var createButton = document.getElementById("create-button");
createButton.addEventListener("click", createFolder);

function createFolder() {
  // Get the signed-in user's ID
  var userId = firebase.auth().currentUser.uid;

  // Get the form input values
  var street = document.getElementById("street-input").value;
  var city = document.getElementById("city-input").value;
  var state = document.getElementById("state-input").value;
  var country = document.getElementById("country-input").value;

  // Create the folder name from the site address
  var folderName = street + ", " + city + ", " + state + ", " + country;

  // Get a reference to the user's folder in Firebase Storage
  var userFolderRef = firebase.storage().ref().child(userId);

  // Create a new folder under the user's folder with the site address as the folder name
  var siteFolderRef = userFolderRef.child(folderName);

  // Store the folder reference in Firestore for future use
  var userData = {
    siteFolderRef: siteFolderRef.toString()
  };
  firebase.firestore().collection("users").doc(userId).update(userData)
    .then(function() {
      console.log("Folder reference stored in Firestore");
    })
    .catch(function(error) {
      console.log("Error storing folder reference in Firestore: ", error);
    });
}
