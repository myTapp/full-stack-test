
const InvalidDatasException = require("./../exceptions/InvalidDatasException");

class Endpoint {

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

            throw new InvalidDatasException(JSON.stringify(validationErrors));
        }
    }
}

module.exports = InvalidDatasException;