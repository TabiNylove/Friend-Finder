var friends = require("./friends.js");
var scoreList = [];
var compareList = [];
var addDifList = [];
var compareValue;
var abs = 0;
var parse = 0;
var addDif = 0;

function subtract() {
	for (var j = 0; j < friends.length; j++) {
		
		for (var i = 0; i < scoreList.length; i++) {
			parse = parseInt(scoreList[i], 10);
			abs = parse - friends[j].scores[i];
			compareValue = Math.abs(abs);
			compareList.push(compareValue);
		}
		console.log(compareList);
		add();

	}
}

function add() {
	for (var i = 0; i < compareList.length; i++) {
		compareList[i] += addDif;
	}
	addDifList.push(addDif);
}

module.exports = addDifList;