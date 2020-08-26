const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const main = require('')
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use('/', main);

server.get('/', (req, res) => {
  res.send("<h2>You're here! 😄 🥇</h2>");
});


module.exports = server;