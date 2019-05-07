// What is a callback - the core of Node.js

// To fully understand how Node.js works you need to know what a callback is.
// A 'callback' is just a fancy term for a function that is passed as an argument to another function.
// The point of callbacks is that you pass them into some function that runs asynchronously - it stores your callback away. 
// When that function is done with whatever it needs to do, it will call your callback with the necessary parameters.

function getStuffFromDatabase(callback) {
    // this takes a long time
    setTimeout(function () {
        var results = "database data";
        callback(results);
    }, 5000);
}

function displayData(data) {
    // some data manipulation happens here
    console.log(data);
}

getStuffFromDatabase(displayData);