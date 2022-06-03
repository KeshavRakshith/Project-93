const firebaseConfig = {
    apiKey: "AIzaSyAEqKlHT4-cOM2KS0MchslC7elGO4JjV64",
    authDomain: "kwitter-keshav-rakshith.firebaseapp.com",
    databaseURL: "https://kwitter-keshav-rakshith-default-rtdb.firebaseio.com",
    projectId: "kwitter-keshav-rakshith",
    storageBucket: "kwitter-keshav-rakshith.appspot.com",
    messagingSenderId: "1053890437459",
    appId: "1:1053890437459:web:2cd69b66ef4051a59d41a6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    
  
  


user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!"
function addRoom() 
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
    }
    );
    localStorage.setItem("room_name",room_name);

    window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
console.log("room Name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    
    });});}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}