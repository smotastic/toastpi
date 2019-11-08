var express = require('express');
var app = express();

const toasts = require('./toasts');

app.get('/', function (req, res) {
    res.send(toasts.all);
})

app.get('/random', function (req, res) {
    res.send(toasts.random());
})

app.listen(process.env.PORT);