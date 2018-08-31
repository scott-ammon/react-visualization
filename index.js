require('dotenv').config();
const express = require('express');
const port = process.env.PORT;
const app = express();

app.use(express.static(`${__dirname}/client/build`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
})

const server = app.listen(port || 3001, () => {
  console.log(`listening on port ${port}`)
});

module.exports = server;