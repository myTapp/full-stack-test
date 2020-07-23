const jwt = require("jsonwebtoken");

class Token {

    constructor() {
        this._datas = {};
    }

    withData(key, value) {
        this._datas[key] = value;
        return this;
    }

    build() {
        return jwt.sign(
            this._datas, 
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_TIME_EXPIRED }
        );
    }

    isValid(token) {
        return jwt.verify(token, process.env.JWT_SECRET);
    }
}

module.exports = Token;