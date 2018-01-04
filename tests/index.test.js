const expect = require('expect');
const request = require('supertest');

const {app} = require('./../index');
const {Row} = require('./../models/row');
const {
	list, 
	add, 
	get, 
	remove, 
	update} = require('./../services/rows');

describe('GET /todos', () => {
	it('should get all todos', (done) => {
		request(app)
			.get('/api/rows')
			.expect(200)
			.end(done);
	});
});