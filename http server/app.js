// Create your first HTTP server!
// Node.js has several modules compiled into the binary e.g. 'http', 'fs', 'querystring' . These are called 'core modules'.

var http = require('http');

// set the port for the server
var port = process.env.PORT || 8000;

function handler(request, response) {
    //display 'HELLO WORLD' when the user is on the home page
    var url = request.url; //e.g. '/'
    if (url.length === 1) {
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write("HELLO WORLD!");
        response.end("HELLO WORLD!");
    }
}

// request - this object contains the information about what the visitor asked for including name of the page that was requested, 
// the settings, and any fields filled in on a form.
// response - this is the object which contains the information that you send back to the user.

http.createServer(handler).listen(port);

console.log('node http server listening on http://localhost:' + port);