var fs = require('fs');
var readableStream = fs.createReadStream('readFile.txt');
var writableStream = fs.createWriteStream('writeFile.txt');

readableStream.pipe(writableStream);