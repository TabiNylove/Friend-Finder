var friends = require("../data/friends.js");
var addDifList = require("../data/compare.js");

module.exports = function(app) {

	app.get("/", function(req, res){
	    res.redirect(301, "/home");
	});

	//can friends be sent if it's an array and not an object?
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	app.post("/survey", function(req, res) {
		let newPost = req.body;
	    console.log(newPost);
	    friends.push(newPost);
	    
	    res.json(newPost);
	});
}