const EventEmitter = require('events');

//Create class
class MyEmmiter extends EventEmitter {}

// Init object
const myEmitter = new MyEmmiter();

// Event Listener
myEmitter.on('event', ()=> console.log('Event Fired'));

// Init event

myEmitter.emit('event');