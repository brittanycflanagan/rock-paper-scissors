// Initialize Firebase
var config = {
  apiKey: "AIzaSyDTsxzmYij6TFaihlHKLHXxCseMWN-4ytY",
  authDomain: "rock-paper-scissors-fdb0b.firebaseapp.com",
  databaseURL: "https://rock-paper-scissors-fdb0b.firebaseio.com",
  projectId: "rock-paper-scissors-fdb0b",
  storageBucket: "rock-paper-scissors-fdb0b.appspot.com",
  messagingSenderId: "592094854354"
};
firebase.initializeApp(config);

var database = firebase.database();
var playerNumber = 1;

// Send Player's Name to Firebase
$("#submit").on("click", function() {
  event.preventDefault();
  var playerName = $("#playerName").val().trim();
  var playerNumber = 1;
  var losses1 = 0;
  var losses2 = 0;
  var wins1 = 0;
  var wins2 = 0;

  if (playerNumber === 1) {
  $("#playerNameDiv").html("Hi"+playerName+"! You are Player"+playerNumber)
 
 database.ref('Players/1').push( {
    losses: losses1,
    playerName: playerName,
    wins: wins1,
   });
  playerNumber++;

} else {
  ("#playerNameDiv").html("Hi"+playerName+"! You are Player"+playerNumber)
  database.ref('Players/2').push({
    losses: losses1,
    playerName: playerName,
    wins: wins1,
    });
  
}

});
  

  //reset game
  //  playerNumber = 1;
  //Reset Firebase