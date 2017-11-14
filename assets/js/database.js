// Initialize Firebase
var config = {
  apiKey: "AIzaSyA0zoYjv-nCRcA6ckZyE3xy2To5_RoSQvM",
  authDomain: "team2project1-3fe10.firebaseapp.com",
  databaseURL: "https://team2project1-3fe10.firebaseio.com",
  projectId: "team2project1-3fe10",
  storageBucket: "",
  messagingSenderId: "334658935081"
};
//firebase.initializeApp(config);

var database = firebase.database();

var chatData = database.ref("/chat");
var playersRef = database.ref("players");
var currentTurnRef = database.ref("turn");
var username = "Guest";
var currentPlayers = null;
var currentTurn = null;
var playerNum = false;
var playerOneExists = false;
var playerTwoExists = false;
var playerOneData = null;
var playerTwoData = null;

var easyURL = "https://opentdb.com/api.php?amount=12&category=9&difficulty=easy&type=multiple"

var mediumURL = "https://opentdb.com/api.php?amount=6&category=9&difficulty=medium&type=multiple";

var hardURL = "https://opentdb.com/api.php?amount=12&category=9&difficulty=hard&type=multiple";

  //FIREBASE FOR AUTHENTICATION (NEW TECH AS WELL)





   // performing our GET request
      $.ajax({
          url: easyURL,
          method: "GET"
        })
  // performing our GET request
  $.ajax({
    url: queryURL,
    method: "GET"
  })

  // after the data request
  .done(function(response) {
    console.log(response);

          //storing the array of results in the variable
          var results = response.results;
          console.log("easy"+JSON.stringify(results));

          for (var i = 0; i < results.length; i++){
            console.log(results[i].question);
       var button = $("button")
       button.attr("data-question", results[i].question)

            console.log(results[i].correct_answer);

          }
        });

          $.ajax({
            url: mediumURL,
            method: "GET"
          })
  
        // after the data request
          .done(function(response) {
            console.log(response);
  
            //storing the array of results in the variable
            var results = response.results;
            console.log("medium"+JSON.stringify(results));

            for (var i = 0; i < results.length; i++){
              console.log(results[i].question);
         var button = $("button")
         button.attr("data-question", results[i].question)

         console.log(results[i].correct_answer);

            }
          });

          $.ajax({
            url: hardURL,
            method: "GET"
          })
  
        // after the data request
          .done(function(response) {
            console.log(response);
  
            //storing the array of results in the variable
            var results = response.results;
            console.log("hard"+JSON.stringify(results));

            for (var i = 0; i < results.length; i++){
              console.log(results[i].question);
         var button = $("button")
         button.attr("data-question", results[i].question)

         console.log(results[i].correct_answer);

            }
          });

          $("#start").click(function() {
            getInGame();

          });
        
//           // CHAT LISTENERS
// // Chat send button listener, grabs input and pushes to firebase. (Firebase's push automatically creates a unique key)
// $("#chat-send").click(function() {
  
//     if ($("#chat-input").val() !== "") {
  
//       var message = $("#chat-input").val();
  
//       chatData.push({
//         name: username,
//         message: message,
//         time: firebase.database.ServerValue.TIMESTAMP,
//         idNum: playerNum
//       });
  
//       $("#chat-input").val("");
//     }
//   });


//   // Chatbox input listener

// $("#chat-input").keypress(function(e) {
  
//     if (e.keyCode === 13 && $("#chat-input").val() !== "") {
  
//       var message = $("#chat-input").val();
  
//       chatData.push({
//         name: username,
//         message: message,
//         time: firebase.database.ServerValue.TIMESTAMP,
//         idNum: playerNum
//       });
  
//       $("#chat-input").val("");
//     }
//   });


//   // Click event for dynamically added <li> elements
// $(document).on("click", "li", function() {
  
//     console.log("click");
  
//     // Grabs text from li choice
//     var clickChoice = $(this).text();
//     console.log(playerRef);
  
//     // Sets the choice in the current player object in firebase
//     playerRef.child("choice").set(clickChoice);
  
//     // User has chosen, so removes choices and displays what they chose
//     $("#player" + playerNum + " ul").empty();
//     $("#player" + playerNum + "chosen").text(clickChoice);
  
//     // Increments turn. Turn goes from:
//     // 1 - player 1
//     // 2 - player 2
//     // 3 - determine winner
//     currentTurnRef.transaction(function(turn) {
//       return turn + 1;
//     });
//   });


//   // Update chat on screen when new message detected - ordered by 'time' value
// chatData.orderByChild("time").on("child_added", function(snapshot) {
  
//     // If idNum is 0, then its a disconnect message and displays accordingly
//     // If not - its a user chat message
//     if (snapshot.val().idNum === 0) {
//       $("#chat-messages").append("<p class=player" + snapshot.val().idNum + "><span>"
//       + snapshot.val().name + "</span>: " + snapshot.val().message + "</p>");
//     }
//     else {
//       $("#chat-messages").append("<p class=player" + snapshot.val().idNum + "><span>"
//       + snapshot.val().name + "</span>: " + snapshot.val().message + "</p>");
//     }
  
//     // Keeps div scrolled to bottom on each update.
//     $("#chat-messages").scrollTop($("#chat-messages")[0].scrollHeight);
//   });
  
//   // Tracks changes in key which contains player objects
//   playersRef.on("value", function(snapshot) {
  
//     // length of the 'players' array
//     currentPlayers = snapshot.numChildren();
  
//     // Check to see if players exist
//     playerOneExists = snapshot.child("1").exists();
//     playerTwoExists = snapshot.child("2").exists();
  
//     // Player data objects
//     playerOneData = snapshot.child("1").val();
//     playerTwoData = snapshot.child("2").val();
  
//     // If theres a player 1, fill in name and win loss data
//     if (playerOneExists) {
//       $("#player1-name").text(playerOneData.name);
//       $("#player1-wins").text("Wins: " + playerOneData.wins);
//       $("#player1-losses").text("Losses: " + playerOneData.losses);
//     }
//     else {


//         // If there is no player 1, clear win/loss data and show waiting
//     $("#player1-name").text("Waiting for Player 1");
//     $("#player1-wins").empty();
//     $("#player1-losses").empty();
//   }

//   // If theres a player 2, fill in name and win/loss data
//   if (playerTwoExists) {
//     $("#player2-name").text(playerTwoData.name);
//     $("#player2-wins").text("Wins: " + playerTwoData.wins);
//     $("#player2-losses").text("Losses: " + playerTwoData.losses);
//   }
//   else {

//     // If no player 2, clear win/loss and show waiting
//     $("#player2-name").text("Waiting for Player 2");
//     $("#player2-wins").empty();
//     $("#player2-losses").empty();
//   }
// });

// // Detects changes in current turn key
// currentTurnRef.on("value", function(snapshot) {

//   // Gets current turn from snapshot
//   currentTurn = snapshot.val();

//   // Don't do the following unless you're logged in
//   if (playerNum) {

//     // For turn 1
//     if (currentTurn === 1) {

//       // If its the current player's turn, tell them and show choices
//       if (currentTurn === playerNum) {
//         $("#current-turn").html("<h2>It's Your Turn!</h2>");
//         $("#player" + playerNum + " ul").append("<li>Rock</li><li>Paper</li><li>Scissors</li>");
//       }
//       else {

//         // If it isnt the current players turn, tells them theyre waiting for player one
//         $("#current-turn").html("<h2>Waiting for " + playerOneData.name + " to choose.</h2>");
//       }

//       // Shows yellow border around active player
//       $("#player1").css("border", "2px solid yellow");
//       $("#player2").css("border", "1px solid black");
//     }

//     else if (currentTurn === 2) {

//       // If its the current player's turn, tell them and show choices
//       if (currentTurn === playerNum) {
//         $("#current-turn").html("<h2>It's Your Turn!</h2>");
//         $("#player" + playerNum + " ul").append("<li>Rock</li><li>Paper</li><li>Scissors</li>");
//       }
//       else {

//         // If it isnt the current players turn, tells them theyre waiting for player two
//         $("#current-turn").html("<h2>Waiting for " + playerTwoData.name + " to choose.</h2>");

//       }

//       // Shows yellow border around active player
//       $("#player2").css("border", "2px solid yellow");
//       $("#player1").css("border", "1px solid black");
//     }

//     else if (currentTurn === 3) {

//       // Where the game win logic takes place then resets to turn 1
//       gameLogic(playerOneData.choice, playerTwoData.choice);

//       // reveal both player choices
//       $("#player1-chosen").text(playerOneData.choice);
//       $("#player2-chosen").text(playerTwoData.choice);

//       //  reset after timeout
//       var moveOn = function() {

//         $("#player1-chosen").empty();
//         $("#player2-chosen").empty();
//         $("#result").empty();

//         // check to make sure players didn't leave before timeout
//         if (playerOneExists && playerTwoExists) {
//           currentTurnRef.set(1);
//         }
//       };

//       //  show results for 2 seconds, then resets
//       setTimeout(moveOn, 2000);
//     }

//     else {

//       //  if (playerNum) {
//       //    $("#player" + playerNum + " ul").empty();
//       //  }
//       $("#player1 ul").empty();
//       $("#player2 ul").empty();
//       $("#current-turn").html("<h2>Waiting for another player to join.</h2>");
//       $("#player2").css("border", "1px solid black");
//       $("#player1").css("border", "1px solid black");
//     }
//   }
// });

// // When a player joins, checks to see if there are two players now. If yes, then it will start the game.
// playersRef.on("child_added", function(snapshot) {

//   if (currentPlayers === 1) {

//     // set turn to 1, which starts the game
//     currentTurnRef.set(1);
//   }
// });







// // Function to get in the game
// function getInGame() {
  
//     // For adding disconnects to the chat with a unique id (the date/time the user entered the game)
//     // Needed because Firebase's '.push()' creates its unique keys client side,
//     // so you can't ".push()" in a ".onDisconnect"
//     var chatDataDisc = database.ref("/chat/" + Date.now());
  
//     // Checks for current players, if theres a player one connected, then the user becomes player 2.
//     // If there is no player one, then the user becomes player 1
//     if (currentPlayers < 2) {
  
//       if (playerOneExists) {
//         playerNum = 2;
//       }
//       else {
//         playerNum = 1;
//       }

    //storing the array of results in the variable
    var results = response.data;
    console.log(results);

  });

//each square is a point value with an on click button that triggers a question
$("tbody").on("click", function(event) {
  console.log(event);

  $(this).attr("da", true);

  //data-button = True;

  //if its true it can not be cliked again

  foo(false);
});

function foo(isCorrect) {

  database.ref().push(); {
    //need authentication first
    clicked: true;
  }

}

//DATA ATTRIBUTE OR CLASS FOR HTML BUTTONS
//EASY/NORMAL/ HARD




// // Creates key based on assigned player number
// playerRef = database.ref("/players/" + playerNum);

//     // Creates player object. 'choice' is unnecessary here, but I left it in to be as complete as possible
//     playerRef.set({
//       name: username,
//       wins: 0,
//       losses: 0,
//       choice: null
//     });



// //////////////////////////////









// // //each square is a point value with an on click button that triggers a question
// //   $("tbody").on("click", function(event){
// //       console.log(event);
      
// //       $(this).attr("da", true);

// //       //data-button = True;
    
// // //if its true it can not be cliked again
        
// //       foo(false)
// //   })

// //   function foo(isCorrect){
// //     database.ref().push({
// //       //need authentication first
// //       "clicked" : true

        
// //       });
// //     }
  

// // //DATA ATTRIBUTE OR CLASS FOR HTML BUTTONS
// // //EASY/NORMAL/ HARD



// // // //info to store in firebase
// display

// // // values of jeopardy grid

// // // link trivia questions from openTBD.com API to each value squares

// // // display 

// // // be able to add to a player score with a correct anwser.

// // // be able to subtract from a player's score with an incorrect anwser.

// // // ablity to reset game at end

// // // eliminating values from grid as they are being anwsered.
//   }
// eliminating values from grid as they are being anwsered.
