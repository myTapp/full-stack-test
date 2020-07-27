class InvalidDatasException extends Error {

    constructor(message) {
        super();
        this.name = "InvalidDatasException";
        this.message = message;
    }
}

module.exports = InvalidDatasException;