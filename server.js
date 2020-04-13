// server.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const scores = require('./routes/api/scores');

const server = express();

// Connect Database
connectDB();

// cors
server.use(cors({ origin: true, credentials: true }));

// Init Middleware
server.use(express.json({ extended: false }));

server.get('/', (req, res) => res.send('Hello world!'));

// use Routes
server.use('/scores', scores);

const port = process.env.PORT || 8082;

server.listen(port, () => console.log(`Server running on port ${port}`));