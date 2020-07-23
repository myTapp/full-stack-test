class LogicException extends Error {

    constructor(message) {
        this.name = "LogicException";
        this.message = message;
    }
}

module.exports = LogicException;