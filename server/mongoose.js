const mongoose = require('mongoose');

module.exports = function(databaseCredentials) {
    mongoose.connect(databaseCredentials).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });
};
