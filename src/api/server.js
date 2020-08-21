const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const main = require('')
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/', main);