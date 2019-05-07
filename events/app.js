var events = require('events');
var eventEmitter = new events.EventEmitter();

var chatopen = (msg) => {
    console.log('*** chat open ***');
    console.log(msg);
    setTimeout(() => {
        eventEmitter.emit('close');
    }, 3000);
}

var chatclose = () => {
    console.log('*** chat close ***');
}

eventEmitter.on('open', chatopen);

eventEmitter.on('close', chatclose);

eventEmitter.emit('open', '*** welcome to abc ***')