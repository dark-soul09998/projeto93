
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyA7zA5DFbsZHKxm9h-QDjrSRrt1ptCqmsw",
  authDomain: "bodybook-bf90c.firebaseapp.com",
  databaseURL: "https://bodybook-bf90c-default-rtdb.firebaseio.com",
  projectId: "bodybook-bf90c",
  storageBucket: "bodybook-bf90c.appspot.com",
  messagingSenderId: "53035393590",
  appId: "1:53035393590:web:fd9dae89774207d5d16e97"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  room_name = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='roomName' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}

  
