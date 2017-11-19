var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routing/htmlRoutes.js")(app);
require("./routing/apiRoutes.js")(app);

// app.get("/home", function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/home.html"))
// })

// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/survey.html"))
// })

// app.get("/api/friends", function(req, res) {
//   res.json(friends);
// })

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
})

