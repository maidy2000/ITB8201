var express = require('express');
var app = express();
var fs = require("fs");
let port = process.env.PORT || 8080

app.get('/greet', function (req, res) {
   res.send("Tere, ".concat(req.query.name))
})

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})