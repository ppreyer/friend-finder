var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routing/htmlRoutes.js")(app);
require("./routing/apiRoutes.js")(app);
var friends = require("./data/friends.js");

// app.get("/home", function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/home.html"))
// })

app.post("/api/friends", function(req, res) {
  
  var surveyResults = req.body;
  console.log(surveyResults);
  surveyResults.name = surveyResults.name.replace(/\s+/g, "").toLowerCase();
  console.log(surveyResults.name);
  surveyResults.photo = surveyResults.photo.replace(/\s+/g, "").toLowerCase();
  console.log(surveyResults.photo);
  // surveyResults.scores = parseInt(surveyResults.scores[0].replace(/\s+/g, ""));
  console.log(surveyResults.scores[0]);
  var newFriend = res.json(surveyResults);
  for(var i = 0; i < newFriend.scores.length; i++) {
    newFriend.scores[i] = parseInt(newFriend.scores[i].replace(/\s+/g, ""));
  }
  // console.log("Scores", surveyResults.scores);
  // friends.push(surveyResults);
  // console.log("friends array", friends);
  // var newFriend = res.json(surveyResults);
  // Iterate through each friend's scores and compare scores to newFriend's scores
  // If highest score then match users as 'best friends'
  // var scoreDifference = 0;
  // for(var i = 0; i < friends[0].scores.length; i++) {
  //   var matchFriendScore = friends[0].scores[i];
  //   var newFriendScore = newFriend.scores[i];
  //   console.log("Ahmed's scores", matchFriendScore);
  //   console.log("Embiid's scores", newFriendScore);
    // if(parseInt(newFriend.scores[i] !== parseInt(matchFriendScore))) {
    //  var scoreCompute = Math.abs(parseInt(newFriendScore) - parseInt(matchFriendScore));
    //  scoreDifference += scoreCompute;
    // }
  // console.log("Total Score", scoreDifference);
  // return scoreDifference

})

// function matchNewFriendWithBestFriend(surveyResults) {
//   for(var i = i < friends[0].length; i++) {
//     if()
//   }
// }

// // Determine the user's most compatible friend using the following as a guide:
// // Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// // With that done, compare the difference between current user's scores against 
// those from other users, question by question. 
// Add up the differences to calculate the  totalDifference.
// // Example:
// // User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// // User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// // Total Difference: 2 + 1 + 2 = 5
// // Remember to use the absolute value of the differences. Put another way: 
// no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// // The closest match will be the user with the least amount of difference.
// // Once you've found the current user's most compatible friend, display the 
// result as a modal pop-up.
// // The modal should display both the name and picture of the closest match.


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
})

