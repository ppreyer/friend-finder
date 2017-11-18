var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
// require("./routing/htmlRoutes.js")(app);
// require("./routing/apiRoutes.js")(app);

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"))
})

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/survey.html"))
})

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
})

