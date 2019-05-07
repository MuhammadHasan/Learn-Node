
var http = require('http');
var fs = require('fs');
var contents = "";

// get data from GET request
// write data to hard drive
// log data to console

const options = {
  host: 'www.google.com',
};

http.get(options, function(response){

  response.on('data', function(chunk) {
    contents += chunk;
  });

  response.on('end', function(){
    fs.writeFile('./contents.html', contents);
  });
});

console.log("contents:", contents);