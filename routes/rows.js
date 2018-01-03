var api = require('./../services/rows');

module.exports = app => {
	app.get('/api/rows', api.list);
	app.get('/api/rows/:id', api.get);
	app.delete('/api/row/:id', api.remove);
	app.put('/api/row/:id', api.update);
	app.post('/api/rows', api.add);	
}

