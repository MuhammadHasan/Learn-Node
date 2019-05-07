var fs = require('fs');
var readableStream = fs.createReadStream('test.txt');
var data = '';

readableStream.setEncoding('UTF8');

readableStream.on('data', (chunk)=>{
    data += chunk;
})

readableStream.on('end', ()=>{
    console.log(data);
})


var writeData = 'Beautiful World';

var writableStream = fs.createWriteStream('write.txt');

writableStream.write(writeData, 'UTF8');
writableStream.end();
writableStream.on('finish', ()=>{
    console.log('finish');
});

