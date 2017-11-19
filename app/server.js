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
  var newFriend = req.body;
  console.log("Friend data", newFriend);
  friends.push(newFriend);
  console.log("All Friends", friends);
  res.json(newFriend);
  // newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();
  // newFriend.photo = newFriend.photo.replace(/\s+/g, "").toLowerCase();


})

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
})

