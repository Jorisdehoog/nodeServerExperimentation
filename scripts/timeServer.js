var net = require('net')
var http = require('http')

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

console.log('hello from js')
function now () {
  var d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

var server = http.createServer(function(req, res){
    req.setEncoding('utf8');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log('hello there')
});

server.listen(8000, (err)=>{
    if (err) {
        console.log('error')
    }
})



// var server = net.createServer(function (socket) {
//     console.log('server started')
//     socket.end(now() + '\n')
// })

// server.listen(8000)