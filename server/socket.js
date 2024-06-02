const { Server } = require("socket.io");

module.exports = function(server) {
    const io = new Server(server, {
        // Allow all cors
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        },
    });
    io.on('connection', (socket) => {
        console.log('A user connected');

        socket.on('disconnect', () => {
            console.log('A user disconnected');
        });

        socket.on('message', (msg) => {
            console.log('Message received:', msg);
        });
    });
    return io;
};
