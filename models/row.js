//TODO: validations, must have all fields
// TODO: make use of the config folder
var thinky = require('thinky')({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  db: process.env.DB_NAME
});

var r = thinky.r;
var type = thinky.type;

var Row = thinky.createModel('Row', {
	student: 
		type.string()
		.min(2)
		.options({enforce_type: "strict"})
,
	counselor: 
		type.string()
		.min(2)
		.options({enforce_type: "strict"})
		.required(),
	hours: 
		type.number()
		.min(0)
		.options({enforce_type: "strict"})
		.required(),
	date: 
		type.date()
		.default(new Date())
		.options({enforce_type: "strict"})
		.required()
});

Row.ensureIndex('student');


module.exports = {
	Row,
	r
};

