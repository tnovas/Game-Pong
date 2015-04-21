var express = require('express');
var app = express();

app.get('*', function(req, res) {	
    res.sendfile('.'+ req.originalUrl);				
});

app.listen(8080);