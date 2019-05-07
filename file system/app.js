var http = require('http');
var fs = require('fs');

// set the port for the server
var port = process.env.PORT || 8000;


function handler(request, response) {

  var url = request.url;

  if (url.length === 1) {

    fs.readFile(__dirname + '/index.html', function (error, index) {

      response.writeHead(200, {"Content-Type": "text/html"});
      response.end(index);

    });

  }
}

http.createServer(handler).listen(port);


console.log('node http server listening on http://localhost:' + port);