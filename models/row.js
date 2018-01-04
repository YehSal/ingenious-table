var fs = require('fs');
var path = require('path');

// var thinky = require('thinky')({
//     host: process.env.DB_HOST,
//     db: process.env.DB_NAME,
//     port: process.env.DB_PORT,
// });

var thinky = require('thinky')({
  host: 'aws-us-east-1-portal.32.dblayer.com',
  db: 'ingenious_db',
  port: 26389,
  user: 'admin',
  password: 'e742b7dd6b39b02dd7c17d59d288c3ff',
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

// r = require('rethinkdb');

// var connection = null;
// r.connect( {
//   host: 'aws-us-east-1-portal.32.dblayer.com',
//   db: 'ingenious_db',
//   port: 26389,
//   user: 'admin',
//   password: 'e742b7dd6b39b02dd7c17d59d288c3ff',
//   ssl: {
//       ca: [fs.readFileSync(path.resolve(__dirname, '../cert'))]
//     }
// }, function(err, conn) {
//     if (err) throw err;
//     console.log('Connection established');
//     connection = conn;
//     r.db('ingenious_db').tableCreate('student_rows').run(connection, function(err, result) {
//     if (err) throw err;
//     console.log(JSON.stringify(result, null, 2));
// });
// });












