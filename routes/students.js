const {Student, r} = require('./../models/student');

var list = (req, res) => {
	Student.orderBy({index: r.desc('name')}).run().then((students) => {
		res.json(students);
	}).catch((err) => {
		res.json({message: err});
	});
};

var add = (req, res) => {
	var student = new Student(req.body);
	student.save().then((result) => {
		res.json(result);
	}).catch((err) => {
		res.json({message: err});
	});
};

var get = (req, res) => {
	Student.get(req.params.id).run().then((student) => {
		res.json(student);
	}).catch((err) => {
		res.json({message: err});
	});
};

var remove = (req, res) => {
	Student.get(req.params.id).run().then((student) => {
		student.delete().then((result) => {
			res.json(result);
		}).catch((err) => {
			res.json({message: err});
		});
	}).catch((err) => {
		res.json({message: err});
	});
};

var update = (req, res) => {
	Student.get(req.params.id).run().then((student) => {
		student.name = req.body.name ? req.body.name : student.name;
		student.counselor = req.body.counselor ? req.body.counselor : student.counselor;
		student.hours = req.body.hours ? req.body.hours : student.hours;
		student.date = r.now();

		student.save().then((result) => {
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