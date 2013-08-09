
/*
 * GET home page.
 */
 var io = require('socket.io').listen(8000);

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
  
 

  io.sockets.on('connection', function (socket) {
  socket.broadcast.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
  
};