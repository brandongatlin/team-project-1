





// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA0zoYjv-nCRcA6ckZyE3xy2To5_RoSQvM",
    authDomain: "team2project1-3fe10.firebaseapp.com",
    databaseURL: "https://team2project1-3fe10.firebaseio.com",
    projectId: "team2project1-3fe10",
    storageBucket: "",
    messagingSenderId: "334658935081"
  };
  firebase.initializeApp(config);


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



//each square is a point value with an on click button that triggers a question
  $("tbody").on("click", function(event){
      console.log(event);
      
      $(this).attr("da", true);

      //data-button = True;
    
//if its true it can not be cliked again
        
      foo(false)
  })

  function foo(isCorrect){
    database.ref().push({
      //need authentication first
      "clicked" : true

        
      });
    }
  

//DATA ATTRIBUTE OR CLASS FOR HTML BUTTONS
//EASY/NORMAL/ HARD



// //info to store in firebase

// values of jeopardy grid

// link trivia questions from openTBD.com API to each value squares

// display 

// be able to add to a player score with a correct anwser.

// be able to subtract from a player's score with an incorrect anwser.

// ablity to reset game at end

// eliminating values from grid as they are being anwsered.



