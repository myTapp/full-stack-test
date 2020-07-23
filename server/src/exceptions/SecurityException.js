class SecurityException extends Error {

    constructor(message) {
        this.name = "SecurityException";
        this.message = message;
    }
}

module.exports = SecurityException;