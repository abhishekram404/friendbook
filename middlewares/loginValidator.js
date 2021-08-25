const Joi = require("joi");
module.exports = validator = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),

    password: Joi.string().min(6).max(30).required(),
  });

  return schema.validate(data);
};
