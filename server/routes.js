const scoreRoutes = require('./routes/scoreRoutes');
const authRoutes = require('./routes/authRoutes');

module.exports = function(app, io) {
    app.use('/scores', scoreRoutes(io));
    app.use('/auth', authRoutes());
    return app;
};
