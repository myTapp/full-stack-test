const bcrypt = require("bcryptjs");

class Encriptor {

    encrypt(value) {
        const quantityLengthSalt = 10;
        return new Promise((resolve, reject) => {
            bcrypt.hash(value, quantityLengthSalt, function(err, hash) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(hash);
            });
        });
    }

    compare(valuePlainText, hash) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(valuePlainText, hash, function(err, hash) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(hash);
            });
        });
    }
}

const encriptor = new Encriptor();
module.exports = encriptor;