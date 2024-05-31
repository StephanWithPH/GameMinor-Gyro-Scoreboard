// Express
const express = require('express');
const app = express();
const cors = require('cors');

// HTTP Server
const http = require('http');
const server = http.createServer(app);
app.use(cors());

// Socket.io
const { Server } = require("socket.io");
const io = new Server(server, {
    // Allow all cors
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    },
});

const port = 3000;

app.use(cors());

// Route
app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
    console.log('A scoreboard connected');
});

// Setup server
server.listen(port, () => {
    console.log('listening on *:3000');
});