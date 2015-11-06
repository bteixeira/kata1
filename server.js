var express = require('express');
var app = express();

var endpoints = require('./endpoints');

app.get('/', function (req, res) {
    res.redirect('/all');
});

app.get('/all', endpoints.all);
app.get('/new', endpoints.new);
//app.post('/insert', endpoints.insert);

var server = app.listen(3000, function () {
    console.log('Now serving on %s:%s', server.address().address, server.address().port);
});
