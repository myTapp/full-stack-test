const Joi = require("@hapi/joi");


module.exports = () => {
    return Joi.object({
        email: Joi.string().min(1).required(),
        password: Joi.string().min(1).required(),
    });
}