const Joi = require("@hapi/joi");


module.exports = () => {
    return Joi.object({
        name: Joi.string().min(1).max(80).required(),
        email: Joi.string().min(1).max(120).required(),
        password: Joi.number().integer().min(1).required(),
    });
}