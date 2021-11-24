function userid()
{
    Username = document.getElementById("inpu1").value;
        localStorage.setItem("username",Username);
    Password = document.getElementById("inpu2").value;
        localStorage.setItem("password",Password);    
        window.location = "kwitter_room.html";
    
}