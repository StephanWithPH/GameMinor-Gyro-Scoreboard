module.exports = function(httpStatusCode, message) {
    return {
        status: httpStatusCode,
        error: message
    };
}