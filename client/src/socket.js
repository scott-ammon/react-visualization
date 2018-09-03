import io from 'socket.io-client';
var socket = io.connect('http://localhost:3000');

const testFunction = function(cb) {
  socket.on('sensor-data', (content) => cb(null, content));
}

export default testFunction;