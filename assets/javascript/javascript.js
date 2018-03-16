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
var playerName = "";

// Send Player's Name to Firebase
$("#submit").on("click", function() {
  event.preventDefault();
  playerName = $("#playerName").val().trim();
  var losses1 = 0;
  var losses2 = 0;
  var wins1 = 0;
  var wins2 = 0;

  if (playerNumber === 1) {
    $("#playerNameDiv").html("Hi"+playerName+"! You are Player"+playerNumber)
    database.ref('/players').set( {
      "test": {
        losses: losses1,  
        playerName: playerName,
        wins: wins1,
      }
    });
    
    console.log(playerNumber);


     
} else {
  $("#playerNameDiv").html("Hi"+playerName+"! You are Player"+playerNumber)
  database.ref('/players').push( {
    "test2": {
      losses: losses1,  
      playerName: playerName,
      wins: wins1,
    }
  });
  
}

});



//Event Listener for when chid added
database.ref('/players').on("value", function(snapshot) {
  console.log (snapshot.val().test.playerName);
  
  $("#player1").html("Player 1:"+snapshot.val().test.playerName)
  if (playerNumber === 1) {playerNumber++; }
  else {playerNumber = 1;}

  //Change text on page, if texton page == xx, then do "player 2"
});



  //reset game
  //  playerNumber = 1;
  //Reset Firebase