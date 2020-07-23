class InvalidDatasException extends Error {

    constructor(message) {
        this.name = "InvalidDatasException";
        this.message = message;
    }
}

module.exports = InvalidDatasException;