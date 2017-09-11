var express = require('express');
var app = express();
// var http = require('http').Server(app);
var fs = require('fs');
var path = require('path');


app.use('/', express.static(path.join(__dirname, 'stream')));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


http.listen(3000, function () {
    console.log('listening on *:3000');
});

