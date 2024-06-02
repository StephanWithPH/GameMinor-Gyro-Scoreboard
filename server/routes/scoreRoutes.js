const express = require('express');
const router = express.Router();
const Score = require('../models/scoreModel.js');

module.exports = function(io) {
    router.get('/', async (req, res) => {
        try {
            const scores = await Score.find();
            res.json(scores);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    router.get('/:id', async (req, res) => {
        try {
            const score = await Score.findById(req.params.id);
            if (!score) {
                return res.status(404).json({
                    error: 'Score not found'
                });
            }
            res.json(score);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    router.post('/', async (req, res) => {
        console.log(req.body);
        try {
            const newScore = new Score(req.body);
            await newScore.save();
            io.emit('scoreboard-changed', 'The scoreboard has changed');
            res.status(201).json(newScore);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    return router;
};
