import io from 'socket.io-client';
var socket = io.connect('http://localhost:3000');

// socket.on('sensor-data', (content) => { 
//   console.log("data is: ", content.sensorData.temperature);
// });

const testFunction = function(cb) {
  socket.on('sensor-data', (content) => cb(null, content));
    // console.log("data is: ", content.sensorData.temperature);
}

// const testFunction = function() {
//   socket.on('sensor-data', (content) => { 
//     // console.log("data is: ", content.sensorData.temperature);
//     return content.sensorData.temperature;
//   });
// }

export default testFunction;