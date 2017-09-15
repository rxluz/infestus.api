//
// var restify = require('restify');
// var server = restify.createServer();
// var setupController = require('./controllers/setupController.js');
// var userController = require('./controllers/userController.js');
// var restifyValidator = require('restify-validator');
// //var config = require('./config/dbConnection.js');
// //var mongoose = require('mongoose');
//
// //mongoose.connect(config.getMongoConnection());
// setupController(server, restify, restifyValidator);
// userController(server);
//
// server.listen(8080, function() {
//   console.log('%s listening at %s', server.name, server.url);
// });


var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.JS!');
}).listen(8080);
