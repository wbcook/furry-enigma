// 1. Socket.io polling 404
// http://stackoverflow.com/questions/24793255/socket-io-cant-get-it-to-work-having-404s-on-some-kind-of-polling-call
// 2. Socket.io browser support
// http://stackoverflow.com/questions/19903646/web-socket-support-in-node-js-socket-io-for-older-browser
// 3. Better Socket.io chat example
// https://github.com/socketio/socket.io/tree/master/examples/chat
var socket = io('http://localhost:1337');
$('#chat-button').on('click', function(){
  socket.emit('chat message', $('#chat-input-field').val());
  $('#chat-input-field').val('');
  return false;
});
socket.on('chat message', function(msg){
  $('#chat-room').append($('<div>').text(msg));
});
