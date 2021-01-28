class ABSError {
    constructor(errorCode, message) {
        this.errorCode = errorCode;
        this.message = message;
    };

    getErrorData() {
        return {
            error: true,
            errorCode: this.errorCode,
            message: this.message
        };
    };
};

module.exports = ABSError;