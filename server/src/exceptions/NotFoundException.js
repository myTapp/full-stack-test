class NotFoundException extends Error {

    constructor(message) {
        this.name = "NotFoundException";
        this.message = message;
    }
}

module.exports = NotFoundException;