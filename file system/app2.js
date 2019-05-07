var fs = require('fs');


fs.readFile('test.txt', function (error, data) {

    if (error) {
        console.log(error);
    } else {
        console.log('Async data is ' + data.toString());
    }

});

var data = fs.readFileSync('test.txt');
console.log('Sync data is ' + data.toString());