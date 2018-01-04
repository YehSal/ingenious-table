const {Row, r} = require('./../models/row');

var list = async (req, res) => {
	try {
		const rows = await Row.orderBy({index: r.desc('student')}).run();
		console.log('rows', rows);
		res.json(rows);	
	} catch(err) {
		res.json({message: err});
	}
};

var add = async (req, res) => {
	try {
		const row = new Row(req.body);
		const result = await row.save();
		res.json(result);		
	} catch(err) {
		res.json({message: err});
	}
};

var get = async (req, res) => {
	try {
		const row = await Row.get(req.params.id).run();
		res.json(row);
	} catch(err) {
		res.json({message: err});
	}
};

var remove = async (req, res) => {
	try {
		const row = await Row.get(req.params.id).run();
		const result = await row.delete();
		res.json(result);		
	} catch(err) {
		res.json({message: err});
	}
};

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