const firebaseConfig = {
  apiKey: "AIzaSyAkAZ9tG-oQA2E6uFcDnO5m3jBuVIHtTCM",
  authDomain: "chatroomxnoway.firebaseapp.com",
  databaseURL: "https://chatroomxnoway-default-rtdb.firebaseio.com",
  projectId: "chatroomxnoway",
  storageBucket: "chatroomxnoway.appspot.com",
  messagingSenderId: "688370240968",
  appId: "1:688370240968:web:6e96911ad32dbdf4f904fd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("username");
document.getElementById("userName").innerHTML = "Bem Vindo(a), " + username;

function addRoom(){
  var roomname = document.getElementById("roomName").value;
  firebase.database().ref("/").child(roomname).update({
    purpose: "Adding Room"
  });
  localStorage.setItem("roomName", roomname);
  window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
    });
  });

}

getData();

