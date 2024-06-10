const errorBuilder = require("../helpers/errorBuilder");
const { SignJWT } = require("jose");
const express = require("express");
const router = express.Router();

module.exports = function() {
    router.post('/', async (req, res) => {
        try {
            const secretKey = req.body.secret;
            if(!secretKey) {
                return res.status(400).json(errorBuilder(400, 'Secret is required'));
            }

            const secretKeyValue = new TextEncoder().encode(secretKey);

            // Generate JWT Token here based on secret from request body
            const jwt = await new SignJWT({})
                .setProtectedHeader({ alg: 'HS256' })
                .setIssuedAt()
                .setExpirationTime('1w')
                .sign(secretKeyValue);

            return res.status(201).json({ token: jwt });
        } catch (err) {
            res.status(500).send(errorBuilder(500, err.message));
        }
    });

    return router;
};