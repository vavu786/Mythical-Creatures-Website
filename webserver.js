var express = require('express');
var app = express();
var http = require('http');

// Setup base directory for html and all other web server files.
app.use(express.static('web'));

http.createServer(app).listen(8080);
console.log("Started webserver...");
