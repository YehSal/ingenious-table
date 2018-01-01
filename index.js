const express = require('express');
const bodyParser = require('body-parser');
const r = require('rethinkdb');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send({name: 'Yehia'});
});

// Dynamic port specification for Heroku depolyment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`App is running on ${PORT}`);
});