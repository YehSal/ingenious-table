//TODO: Refactor the code into routes and models
//TODO: validations, must have all fields
var thinky = require('thinky')({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  db: process.env.DB_NAME
});

var r = thinky.r;

var Student = thinky.createModel('Student', {
	name: String,
	counselor: String,
	hours: Number,
	Date: {_type: Date, default: r.now()}
});

Student.ensureIndex('name');


module.exports = {
	Student,
	r
};
