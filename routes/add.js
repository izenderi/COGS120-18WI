var data = require("../data.json");

exports.addItem = function(req, res) {    

	console.log(req.query.itemName);
	console.log(req.query.quantity);
	var newItem = {"itemName": req.query.itemName, "quantity": req.query.quantity};
	data.item.push(newItem);
	res.render('list', data);
 };