const {Student, r} = require('./../models/student');

var list = async (req, res) => {
	try {
		const students = await Student.orderBy({index: r.desc('name')}).run();
		res.json(students);	
	} catch(err) {
		res.json({message: err});
	}
};

var add = async (req, res) => {
	try {
		const student = new Student(req.body);
		const result = await student.save();
		res.json(result);		
	} catch(err) {
		res.json({message: err});
	}
};

var get = async (req, res) => {
	try {
		const student = await Student.get(req.params.id).run();
		res.json(student);
	} catch(err) {
		res.json({message: err});
	}
};

var remove = async (req, res) => {
	try {
		const student = await Student.get(req.params.id).run();
		const result = await student.delete();
		res.json(result);		
	} catch(err) {
		res.json({message: err});
	}
};

var update = async (req, res) => {
	try {
		var student = await Student.get(req.params.id).run();

		student.name = req.body.name ? req.body.name : student.name;
		student.counselor = req.body.counselor ? req.body.counselor : student.counselor;
		student.hours = req.body.hours ? req.body.hours : student.hours;
		student.date = r.now();

		const result = await student.save();
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