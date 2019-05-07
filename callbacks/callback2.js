var http = require('http');
var fs = require('fs');
var contents = "";

// get data from GET request
// write data to hard drive
// log data to console

getDataThenDoSomethingElse(console.log);

function getDataThenDoSomethingElse (callback) {
  const options = {
    host: 'www.google.com',
  };
  
  http.get(options, (response)=>{

    response.on('data', (chunk)=> {
      contents += chunk;
    });

    response.on('end', ()=>{
      fs.writeFile('./contents.html', contents);
    });
  });

  callback(contents);
}