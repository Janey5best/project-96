
const firebaseConfig = {
      apiKey: "AIzaSyCyh5RU6o3vw-DDYUygl92WOxxG33EOFBk",
      authDomain: "kwitter-project-1dab5.firebaseapp.com",
      databaseURL: "https://kwitter-project-1dab5-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-1dab5",
      storageBucket: "kwitter-project-1dab5.appspot.com",
      messagingSenderId: "275495326946",
      appId: "1:275495326946:web:7266b0c6c7200a229bfabb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function addRoom()
    {
      Room_name = document.getElementById("room_name").value;
      firebase.databas().ref("/").child(room_name).update({

      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";



    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room Name -" +room_names);
      row = "<div class='room_name' id="+Room_names+" onclick= ' redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document,getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}


