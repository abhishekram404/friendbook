const Joi = require("joi");

module.exports = updateValidator = (data) => {
  const schema = Joi.object({
    password: Joi.string().min(6).max(30).required(),
    confirm_password: Joi.ref("password").required(),
  });
  return schema.validate(data);
};
