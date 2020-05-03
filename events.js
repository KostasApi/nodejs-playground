const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// myEmitter.on('event', function (a, b) {
//   console.log(a, b, this, this === myEmitter);
//   // Prints:
//   //   a b MyEmitter {
//   //     domain: null,
//   //     _events: { event: [Function] },
//   //     _eventsCount: 1,
//   //     _maxListeners: undefined } true
// });

// myEmitter.emit('event', 'a', 'b');

myEmitter.on('event', (a, b) => {
  console.log(a, b, this);
  // Prints: a b {}
});

myEmitter.emit('event', 'a', 'b');
