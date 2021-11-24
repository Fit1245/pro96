const firebaseConfig = {
    apiKey: "AIzaSyDSnWmAkid56nC5nl8v3IcaM9NeYqNIPC0",
    authDomain: "kwitter-project-8d57e.firebaseapp.com",
    databaseURL: "https://kwitter-project-8d57e-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-8d57e",
    storageBucket: "kwitter-project-8d57e.appspot.com",
    messagingSenderId: "562366174442",
    appId: "1:562366174442:web:074443fdf21688034c7393"
  };
  
  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);


firebase.initializeApp(firebaseConfig);

store_the_username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML= "Welcome " + store_the_username;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("Output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
function addRoom()
{
  Username = document.getElementById("input3").value;
  firebase.database().ref("/").child(Username).update({
      purpose:"adding room"});
      localStorage.setItem("room_name",Username);
      window.location = "kwitter_page.html";
}
