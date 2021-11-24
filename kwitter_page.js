const firebaseConfig = {
    apiKey: "AIzaSyDSnWmAkid56nC5nl8v3IcaM9NeYqNIPC0",
    authDomain: "kwitter-project-8d57e.firebaseapp.com",
    databaseURL: "https://kwitter-project-8d57e-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-8d57e",
    storageBucket: "kwitter-project-8d57e.appspot.com",
    messagingSenderId: "562366174442",
    appId: "1:562366174442:web:074443fdf21688034c7393"
  };
  

  firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("username");
 room_name = localStorage.getItem("room_name");
 


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout()
{
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
}
