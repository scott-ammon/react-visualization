import io from 'socket.io-client';
var socket = io.connect('http://localhost:3000');

const receiveData = function(cb) {
  socket.on('sensor-data', (content) => cb(null, content));
}

export default receiveData;