class SecurityException extends Error {

    constructor(message) {
        super();
        this.name = "SecurityException";
        this.message = message;
    }
}

module.exports = SecurityException;