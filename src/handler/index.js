const handler = (err, req, res, next) => {
    res.send(err.getErrorData());
    return;
};

module.exports = handler;