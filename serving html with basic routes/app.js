var http = require('http');
var fs = require('fs');

// set the port for the server
var port = process.env.PORT || 8000;


function handler(request, response) {

    var url = request.url;

    //   if (url === '/' || url === '/home') {
    //     fs.readFile(__dirname + '/index.html', function (error, index) {
    //       response.writeHead(200, {
    //         "Content-Type": "text/html"
    //       });
    //       response.end(index);
    //     });
    //   }

    if (url === '/' || url === '/home') {
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    }else{
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        fs.createReadStream(__dirname + '/404.html').pipe(response);
    }


}

http.createServer(handler).listen(port);


console.log('node http server listening on http://localhost:' + port);