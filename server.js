ar http = require('http');
var io = require('socket.io');

server = http.createServer(function(req, res){
});
server.listen(8080);

// socket.io 
var socket = io.listen(server);

socket.on('connection', function(client){
  client.on('message', function(msg){
      socket.broadcast(msg);
  })
}); 
