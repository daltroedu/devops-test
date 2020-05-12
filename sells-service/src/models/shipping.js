const Joi = require("@hapi/joi");
const { validate } = require("express-validation");

const shipping = {
  body: Joi.object({
    id: Joi.string().required()
  })
};

module.exports = validate(shipping);