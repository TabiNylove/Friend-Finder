// PACKAGES / VARIABLES
//============================================
var express = require("express");
var bodyParser = require("body-parser");
var PORT = 3000;
var app = express();

// PARSER
//============================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("app/public"));

// ROUTES
//============================================
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//============================================

// LISTENER
//============================================
app.listen(PORT, function() {
    console.log("I am listening on PORT " + PORT);
}); 