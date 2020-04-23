// server.js
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const connectDB = require('./config/db');
const port = process.env.PORT || 8082;
const index = require ('./routes/api/index')
var cors = require('cors');
const app = express()
app.use(index)
const server = http.createServer(app)
const io = socketIo(server)

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
// server.use('/scores', scores);

// sockets
io.on('connection', (socket) => {
  console.log('A user connected: ' + socket.id);

  socket.on('disconnect', function () {
      console.log('A user disconnected: ' + socket.id);
  });
}); 

// connect
server.listen(port, () => console.log(`Server running on port ${port}`));