class NotFoundException extends Error {

    constructor(message) {
        super();
        this.name = "NotFoundException";
        this.message = message;
    }
}

module.exports = NotFoundException;