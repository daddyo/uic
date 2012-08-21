
var http = require('http');
var path = require('path');
var fs = require('fs');
 
// var webroot = './public';
var port = process.env.PORT;

var server = http.createServer(function (request, response) {
 
    console.log('request starting...');
	
	var filePath = '.' + request.url;
	if (filePath == './') {
		filePath = './default.html';
	}

	path.exists(filePath, function(exists) {
		if (exists) {
			fs.readFile(filePath, function(error, content) {
				if (error) {
					response.writeHead(500);
					response.end();
				}
				else {
					response.writeHead(200, { 'Content-Type': 'text/html' });
					response.end(content, 'utf-8');
				}
			});
		}
		else {
			// TODO: uncomment for PROD
			response.writeHead(404);
			response.end();
		}
	});
	
});

server.listen( port );
 
console.log('Server running on port ' + port );
