var express = require('express');
var app = express();

app.get('/de/random', function (req, res) {
    res.send({ toast: "hallos" });
})

app.listen(process.env.PORT);