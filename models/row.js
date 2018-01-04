var fs = require('fs');
var path = require('path');
var thinky = require('thinky')({
  host: process.env.DB_HOST_DEPLOYED,
  db: process.env.DB_NAME_DEPLOYED,
  port: process.env.DB_PORT_DEPLOYED,
  user: process.env.DB_USER_DEPLOYED,
  password: process.env.DB_PASSWORD_DEPLOYED,
  ssl: {
      ca: [fs.readFileSync(path.resolve(__dirname, '../cert'))]
    }
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












