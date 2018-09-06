const dweetClient = require('node-dweetio');
const five = require('johnny-five');

const board = new five.Board();
const dweetio = new dweetClient();

board.on('ready', () => {
  const temperatureSensor = new five.Sensor({
    pin: 'A0',
    threshold: 1
  });

  temperatureSensor.on('change', (value) => {
    const sensorName = 'node-temperature-monitor';
    let voltage = (value / 1024.0) * 5.0;
    let tempC = (voltage - 0.5) * 100;
    let tempF = tempC * (9 / 5) + 32;

    const message = {
      temperature: tempF
    };

    dweetio.dweet_for(sensorName, message, (err, dweet) => {
      // if (err) {
      //   console.log('[Error]: ', err);
      // }
      if (dweet) {
        console.log(dweet.content);
      }
    });
  });
});
