var data = require("../data.json");

exports.addFriend = function(req, res) {   
	// Your code goes here
	//event.preventDefault();

	var name = req.query.name;
	var desc = req.query.description;

	var newFriend = Object();
	newFriend.name = name;
	newFriend.description = desc;
	newFriend.imageURL = "http://lorempixel.com/400/400/people";	

	data.friends.push(newFriend);
	console.log(data);

	res.render('index', data);
};