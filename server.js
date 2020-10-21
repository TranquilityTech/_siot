var express = require("express");
var sockio = require("socket.io");
var cors = require("cors")

var app = express();

// enable cors for everyone
app.use(cors());

// serve static files from the "public" directory
app.use(express.static('public'));

// start the app on port specified
var post = 3000;
var io = sockio.listen(app.listen(post), {log: true});
