var http = require('http');

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.writeHead(200, {'Content-Type': 'application/json'});
    let response = {'name': 'Arman','family': 'Khalili', 'age': '20'}
    res.end(JSON.stringify(response));
}).listen(8080);