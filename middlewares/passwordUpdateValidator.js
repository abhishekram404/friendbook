const Joi = require("joi");

module.exports = passwordUpdateValidator = (data) => {
  const schema = Joi.object({
    password: Joi.string().min(6).max(30).required(),
    confirmPassword: Joi.ref("password"),
    mode: Joi.string().allow("default", "password"),
  });
  return schema.validate(data);
};
