var express = require("express");
var sockio = require("socket.io");
var cors = require("cors")

var app = express();

// enable cors for everyone
app.use(cors());

// start the app on port specified
var post = 3000;
var io = sockio.listen(app.listen(post), {
    log: true
});

io.origins((origin, callback) => {
    /*
    if (origin !== 'https://foo.example.com') {
        return callback('origin not allowed', false);
    }
    */
    callback(null, true);
});

io.on('connection', async (socket) => {
    console.log('connection');
});
