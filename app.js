var express = require('express')
var app = express();
var path = require ('path');
var pg = require ('pg');

var knex = require('knex')({
    client: 'pg',
    connection: {
        host     : '127.0.0.1',
        user     : 'vagrant',
        password : 'vagrant',
        database : 'state-exam'
    }
});

app.use(express.static(path.join(__dirname + '/app/build')));
app.use(express.static(path.join(__dirname + '/app/study-book-files')));
app.set('design', path.join(__dirname + '/app/build'));

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/app/build/index.html');
});

app.get('/api', function (req, res) {
    knex.select().table('student').then(function(data){
        res.json(data);
    });
})

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://localhost:%s', port)

})