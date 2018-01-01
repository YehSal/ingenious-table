const r = require('rethinkdb');
const config = require('../config/db');

var connect = (rest, res, next) => {
  let count = 0;

  (function _connect() {
    r.connect( config, ( error, connection ) => {
      if (error && error.name === 'ReqlDriverError' && error.message.indexOf('Could not connect') === 0 && ++count < 31 ) {
        console.log( error );
        setTimeout( _connect, 1000 );
        return;
      }
    	req._rdb = connection;
    	next();
    });
  })();
};

var close = (req, res, next) => {
  req._rdb.close();
}

module.exports = {
	connect,
	close
};
