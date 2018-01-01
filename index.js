const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send({name: 'Yehia'});
});

// Dynamic port specification for Heroku depolyment
const PORT = process.env.PORT || 3000;
app.listen(PORT);