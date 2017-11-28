// Node server environment

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

require("./routing/htmlRoutes.js")(app);
require("./routing/apiRoutes.js")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
})

