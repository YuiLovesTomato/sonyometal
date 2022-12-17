const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//router
var router = express.Router();

//import mysql-db.js
var mysqlDB = require('./mysql-db');
mysqlDB.connect();

//mysql query

//import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
//doesn't work


//output

//at server start
//post list
app.listen(8080, function() {
        console.log('listening on 8080')
})

//go to home
app.get('/', function(req, res) {
        mysqlDB.query('SELECT * FROM posts', function (req, result) {
                res.render('index', { info : result });
        });
})

//writing notices
app.get('/write', function(req, res) {
        res.sendFile(__dirname + '/write.html');
})

//posting process
app.post('/add', function(req, res) {
        var id = req.body.id;
        var password = req.body.password;
        var title = req.body.title;
        var description = req.body.description;

        var sql = `INSERT INTO posts (id, password, title, post) VALUES ("${id}", "${password}", "${title}", "${description}")`;
        mysqlDB.query(sql, function(err, result) {
                if (err) throw err;
                console.log('record inserted');
                res.redirect('/');
        });
});
