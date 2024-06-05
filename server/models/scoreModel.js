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
        min: 0,
        max: 3599999

    }
},
{
    timestamps: true
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
