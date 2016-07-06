// 1. Working with Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// 2. Array.slice()
// http://stackoverflow.com/questions/5767325/remove-a-particular-element-from-an-array-in-javascript
// 3. CAH Online
// https://github.com/ajanata/PretendYoureXyzzy
// 4. Comet Programming
// https://en.wikipedia.org/wiki/Comet_%28programming%29
// 5. Socket.io Deployment
// http://book.mixu.net/node/ch13.html
var path = require('path');
var express = require('express');
var http = require('http').Server();
var io = require('socket.io')(http);
var app = express();

// set an environmental variable named port with the app port
app.set('port', (process.env.PORT || 3000));

// mount the static middleware at the path '/' to serve files from /public
app.use('/', express.static(path.join(__dirname, 'public')));

// emit chat messages
io.on('connection', function(socket){
  console.log('user connected at ' + new Date());
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

// cards listen on port 3000
app.listen(app.get('port'), function() {
  console.log('App started on port: ' + app.get('port'));
});

// chat listens on port 1337
http.listen('1337', function() {
  console.log('Http started on port: ' + '1337');
});
