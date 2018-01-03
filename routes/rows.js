const {Row, r} = require('./../models/row');

var list = (req, res) => {
	Row.orderBy({index: r.desc('student')}).run().then((rows) => {
		res.json(rows);
	}).catch((err) => {
		res.json({message: err});
	});
};

var add = (req, res) => {
	var row = new Row(req.body);
	row.save().then((result) => {
		res.json(result);
	}).catch((err) => {
		res.json({message: err});
	});
};

var get = (req, res) => {
	Row.get(req.params.id).run().then((row) => {
		res.json(row);
	}).catch((err) => {
		res.json({message: err});
	});
};

var remove = (req, res) => {
	Row.get(req.params.id).run().then((row) => {
		row.delete().then((result) => {
			res.json(result);
		}).catch((err) => {
			res.json({message: err});
		});
	}).catch((err) => {
		res.json({message: err});
	});
};

var update = (req, res) => {
	Row.get(req.params.id).run().then((row) => {
		row.student = req.body.student ? req.body.student : row.student;
		row.counselor = req.body.counselor ? req.body.counselor : row.counselor;
		row.hours = req.body.hours ? req.body.hours : row.hours;
		row.date = r.now();

		row.save().then((result) => {
			res.json(result);
		}).catch((err) => {
			res.json({message: err});
		});
	}).catch((err) => {
		res.json({message: err});
	});
};

module.exports = {
	list,
	add,
	get,
	remove,
	update
};