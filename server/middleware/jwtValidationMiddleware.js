const errorBuilder = require('../helpers/errorBuilder');
const { jwtVerify } = require("jose");

module.exports = function(secretKey) {
    return async function(req, res, next) {
        const secretKeyValue = new TextEncoder().encode(secretKey);

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json(errorBuilder(401, 'No token provided'));
        }

        const token = authHeader.split(' ')[1];

        try {
            const { payload } = await jwtVerify(token, secretKeyValue);
            req.user = payload; // Attach the payload to the request object
            next();
        } catch (error) {
            return res.status(401).json(errorBuilder(401, 'Invalid or expired token'));
        }
    }
}