// TODO: Refactor routes out
const express = require( 'express' );
const logger = require( 'morgan' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
const helmet = require( 'helmet' );
require( 'dotenv' ).config();

const app = express();

/*
 * Middleware
 */
app.use( logger( 'dev' ) );
app.use( bodyParser.urlencoded( {
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

/*
 * Routes
 */
var api = require('./services/students');
app.get('/students', api.list);
app.get('/students/:id', api.get);
app.delete('/student/:id', api.remove);
app.put('/student/:id', api.update);
app.post('/students', api.add);


/* 
 * Dynamic port specification for Heroku depolyment
 */
const PORT = process.env.PORT || 5000;
var server = app.listen(PORT, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`App is listening on port ${port}`);
});
