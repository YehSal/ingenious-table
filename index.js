// TODO: Refactor routes out
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const http = require('http');
const socketIO = require('socket.io');
require( 'dotenv' ).config();

const PORT = process.env.PORT || 5000;
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
 * Routes
 */
var api = require('./services/rows');
app.get('/api/rows', api.list);
app.get('/api/rows/:id', api.get);
app.delete('/api/row/:id', api.remove);
app.put('/api/row/:id', api.update);
app.post('/api/rows', api.add);


/* 
 * Dynamic port specification for Heroku depolyment
 */
server.listen(PORT, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`App is listening on port ${port}`);
});
