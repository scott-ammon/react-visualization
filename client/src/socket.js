import io from 'socket.io-client';
var socket = io.connect('http://localhost:3000');


//  include dweet.io on the front end here
//  use listen.for function to send data
//  to component for setting to state


const receiveData = function(cb) {
  socket.on('sensor-data', (content) => cb(null, content));
}

export default receiveData;