'use strict';
var http = require('http').createServer();
var io = require('socket.io')(http);

io.origins((origin, callback) => {
    /*
    if (origin !== 'https://foo.example.com') {
        return callback('origin not allowed', false);
    }
    */
    callback(null, true);
});

io.on('connection', function(socket) {
    console.log('connection default namespace');
    socket.on('msg', function(data, ack) {
        if (ack != null) {
            ack(1, 2, 3);
        }
        console.log(`data from default => ${data}`);
        socket.emit('fromServer', `${data}`);
    });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
