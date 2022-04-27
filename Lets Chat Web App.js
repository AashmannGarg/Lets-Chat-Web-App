
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAW49GKqVg6DbXXbcv0M6IvGEEyn2BLgFU",
      authDomain: "kwitter-ffb31.firebaseapp.com",
      databaseURL: "https://kwitter-ffb31-default-rtdb.firebaseio.com",
      projectId: "kwitter-ffb31",
      storageBucket: "kwitter-ffb31.appspot.com",
      messagingSenderId: "436546776946",
      appId: "1:436546776946:web:d65db93d73ebfcd860b7eb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
