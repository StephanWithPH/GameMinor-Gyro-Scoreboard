const express = require('express');
const router = express.Router();
const Score = require('../models/scoreModel');
const errorBuilder = require('../helpers/errorBuilder');
const jwtValidationMiddleware = require('../middleware/jwtValidationMiddleware');

module.exports = function(io) {
    router.get('/', async (req, res) => {
        try {
            var query = req.query.limit;
            const scores =
                query ?
                    await Score.find().sort({ timeTaken: 1 }).limit(parseInt(query)) :
                    await Score.find().sort({ timeTaken: 1 });
            res.json(scores);
        } catch (err) {
            res.status(500).send(errorBuilder(500, err.message));
        }
    });

    router.get('/:id', async (req, res) => {
        try {
            const score = await Score.findById(req.params.id);
            if (!score) {
                return res.status(404).json(errorBuilder(404, 'Score not found'));
            }
            res.json(score);
        } catch (err) {
            res.status(500).send(errorBuilder(500, err.message));
        }
    });

    router.post('/', jwtValidationMiddleware(process.env.JWT_KEY), async (req, res) => {
        try {
            const newScore = new Score(req.body);
            await newScore.save();
            io.emit('scoreboard-changed', 'The scoreboard has changed');
            res.status(201).json(newScore);
        } catch (err) {
            res.status(500).send(errorBuilder(500, err.message));
        }
    });

    return router;
};
