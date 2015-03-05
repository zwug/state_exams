var express = require('express')
var app = express();
var path = require ('path');

app.use(express.static(path.join(__dirname + '/views')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

app.get('/', function (req, res) {
    res.render('index');
})

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port)

})