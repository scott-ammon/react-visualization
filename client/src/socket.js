const openSocket = require('socket.io-client');
const socket = openSocket('http://localhost:3000');

socket.on('sensor-data', (content) => { 
  console.log("data is: ", content.sensorData.temperature);
  return(content.sensorData.temperature);
});

// const testFunction = function() {
  // socket.on('sensor-data', (content) => { 
  //  console.log("data is: ", content.sensorData.temperature);
  //  return(content.sensorData.temperature);
  // });
// }

// export default testFunction;