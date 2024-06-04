require('dotenv').config()
// Express
const express = require('express');
const app = express();
const cors = require('cors');

// HTTP Server
const http = require('http');
const server = http.createServer(app);

// Socket.io
const socketConfig = require('./socket');
const io = socketConfig(server);

// Mongoose
const mongooseConfig = require('./mongoose');
mongooseConfig(process.env.DATABASE_URL);

app.use(cors());
app.use(express.json());

const routesConfig = require('./routes');
routesConfig(app, io);

const port = 8080;

server.listen(port, () => {
    console.log('listening on *:8080');
});
