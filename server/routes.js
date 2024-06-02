const scoreRoutes = require('./routes/scoreRoutes');

module.exports = function(app, io) {
    app.use('/scores', scoreRoutes(io));
    return app;
};
