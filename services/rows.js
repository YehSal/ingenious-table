// Row Services has CRUD methods for the Row model
const {Row, r} = require('./../models/row');

// List all rows 
var list = async (req, res) => {
	try {
		const rows = await Row.orderBy({index: r.asc('student')}).run();
		res.json(rows);	
	} catch(err) {
		res.json({message: err});
	}
};

// Add a new row
var add = async (req, res) => {
	try {
		const row = new Row(req.body);
		const result = await row.save();
		res.json(result);		
	} catch(err) {
		res.json({message: err});
	}
};

// Get a row
var get = async (req, res) => {
	try {
		const row = await Row.get(req.params.id).run();
		res.json(row);
	} catch(err) {
		res.json({message: err});
	}
};

// Remove a row
var remove = async (req, res) => {
	try {
		const row = await Row.get(req.params.id).run();
		const result = await row.delete();
		res.json(result);		
	} catch(err) {
		res.json({message: err});
	}
};

// Update a row
var update = async (req, res) => {
	try {
		var row = await Row.get(req.params.id).run();

		row.student = req.body.student ? req.body.student : row.student;
		row.counselor = req.body.counselor ? req.body.counselor : row.counselor;
		row.hours = req.body.hours ? req.body.hours : row.hours;
		row.date = req.body.date? req.body.date : row.date;

		const result = await row.save();
		res.json(result);
	} catch(err) {
		res.json({message: err});
	}
};

module.exports = {
	list,
	add,
	get,
	remove,
	update
};