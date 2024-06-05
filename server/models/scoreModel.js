const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    timeTaken: {
        type: Number,
        required: true,
        min: 0
    }
},
{
    timestamps: true
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
