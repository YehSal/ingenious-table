var r = require('rethinkdb');

/*
 * Server configurations
 */
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const http = require('http');
const socketIO = require('socket.io');
require( 'dotenv' ).config();


var app = express();
var server = http.createServer(app);
var io = socketIO(server);

/*
 * Middleware
 */
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

/*
 * Routes and handling of production routing to tell our express server
 * how to handle client-side routes
 */
 require('./routes/rows')(app);

 if (process.env.NODE_ENV === 'production') {
 	// Express will serve up production assets like main.js or main.css
 	app.use(express.static('client/build'));

 	// Express will serve up the index.html if it doesn't recognize the route
 	const path = require('path');
 	app.get('*', (req, res) => {
 		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
 	});
 }

/* 
 * Dynamic port specification for Heroku depolyment
 */
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`App is listening on port ${port}`);
});
