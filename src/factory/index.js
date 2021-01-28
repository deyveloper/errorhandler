const ABSError = require('./abstraction');

const generateError = (errorCode, message) => {
    return new ABSError(errorCode, message);
};

module.exports = generateError;