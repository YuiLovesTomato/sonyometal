const express = require('express');
const app = express();

//import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

app.listen(8080, function() {
	console.log('listening on 8080')
})

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
})

app.get('/subpage', function(req, res) {
	res.sendFile(__dirname + '/subpage.html');
})
