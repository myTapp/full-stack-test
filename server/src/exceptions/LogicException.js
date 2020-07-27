class LogicException extends Error {

    constructor(message) {
        super();
        this.name = "LogicException";
        this.message = message;
    }
}

module.exports = LogicException;