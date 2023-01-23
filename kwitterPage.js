//LINKS FIREBASE
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
  userName=localStorage.getItem("userName");
  roomName=localStorage.getItem("roomName");

  function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
        name:userName,
        message:msg,
        like:0
      });
  }
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebaseMessageId = childKey;
    messageData = childData;
//Início do código
console.log(firebaseMessageId);
console.log(messageData);
name = messageData['name'];
message = messageData['message'];
like = messageData['like'];
nameWithTag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = nameWithTag + messageWithTag +like_button + spanWithTag;
document.getElementById("output").innerHTML += row;
//Fim do código
 } });  }); }
getData();