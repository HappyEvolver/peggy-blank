// Basic requirements...
var fs = require('fs');
var path = require("path");

//
// Start express server and configure it
//
var express = require('express');
var app = express();

app.configure(function () {
    app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname, 'public')));
});

// route for home page
app.get("/", function(req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      return res.send(500, 'Error loading index.html');
    }
    res.set('Content-Type', 'text/html');
    res.send(200, data);
  });
});

// route for Zopim demo
app.get("/zopim", function(req, res) {
  fs.readFile(__dirname + '/zopim.html',
  function (err, data) {
    if (err) {
      return res.send(500, 'Error loading zopim.html');
    }
    res.set('Content-Type', 'text/html');
    res.send(200, data);
  });
});

// route for PureChat demo
app.get("/purechat", function(req, res) {
  fs.readFile(__dirname + '/purechat.html',
  function (err, data) {
    if (err) {
      return res.send(500, 'Error loading purechat.html');
    }
    res.set('Content-Type', 'text/html');
    res.send(200, data);
  });
});

// route for P3Chat demo
app.get("/p3chat", function(req, res) {
  fs.readFile(__dirname + '/p3chat.html',
  function (err, data) {
    if (err) {
      return res.send(500, 'Error loading p3chat.html');
    }
    res.set('Content-Type', 'text/html');
    res.send(200, data);
  });
});

// route for ClickDesk demo
app.get("/clickdesk", function(req, res) {
  fs.readFile(__dirname + '/clickdesk.html',
  function (err, data) {
    if (err) {
      return res.send(500, 'Error loading clickdesk.html');
    }
    res.set('Content-Type', 'text/html');
    res.send(200, data);
  });
});

// Now use 'http' to wrap the express wrapper; this is needed so
// that 'io' binds to an instance of the correct type... really!
var http = require("http");
var server = http.createServer(app);

var theport = process.env.PORT || 2000;
server.listen(theport);
console.log ("express server on port: " + theport);
