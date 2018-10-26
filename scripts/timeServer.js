var http = require('http')

// Define the port used
const port = 8000;

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

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

    // write 200-message to reponse
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(time);
});

server.listen(port, (err)=>{
    if (err) {
        console.log('error')
    }
})

console.log("Server listening on port: " + port)



// var server = net.createServer(function (socket) {
//     console.log('server started')
//     socket.end(now() + '\n')
// })

// server.listen(8000)