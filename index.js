
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


//sending data as string and viewing it
// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

// sending data to the html file
app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});

//Only sending msg from web to terminal
// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//   });
// });

//sending msg to everyone
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

