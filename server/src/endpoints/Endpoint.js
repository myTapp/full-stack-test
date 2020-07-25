
const InvalidDatasException = require("./../exceptions/InvalidDatasException");

class Endpoint {

    constructor() {
        this.isValid = this.isValid.bind(this);
    }

    getValidationRules() {
        throw new Error("Method not implement child class!");
    }

    isValid(values) {
        const errors = this.getValidationRules()
            .validate(values, { abortEarly: false, allowUnknown: true });

        if (errors.error) {
            const validationErrors = {};
            errors.error.details.forEach(item => {
                validationErrors[item.context.label] = item.message.replace(/"/g, "");
            });

            throw new InvalidDatasException(validationErrors);
        }
    }
}

module.exports = Endpoint;