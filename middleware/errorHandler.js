const { logEvent } = require('./logEvents');

const errorHandler = function (err, req, res, next) {
    logEvent(`${err.name}: ${err.message}`,'..', 'logs', 'errorLog.txt');
    console.error(error.stack);
    res.status(500).send(err.message);
};

module.exports = errorHandler;