// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA1N99sy3fhAV3403fFDCcSLQ7yvFcwr68",
      authDomain: "kwitter-fb6fc.firebaseapp.com",
      databaseURL: "https://kwitter-fb6fc-default-rtdb.firebaseio.com",
      projectId: "kwitter-fb6fc",
      storageBucket: "kwitter-fb6fc.appspot.com",
      messagingSenderId: "887603772488",
      appId: "1:887603772488:web:23bcf30a23a1531ba42c7d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName()this.id' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
            purpose: "adding user"
      });
}

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}