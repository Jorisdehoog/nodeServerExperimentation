// var net = require('net')
var http = require('http')
// var cors = require('cors')

// var app = http();
// app.use(cors());

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
    console.log(req.url);
    time = now();
    console.log(time);
    // set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', 'req.header.origin');

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(time);
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