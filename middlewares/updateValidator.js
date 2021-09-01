const Joi = require("joi");

module.exports = updateValidator = (data) => {
  const schema = Joi.object({
    fullName: Joi.string().min(3).max(60).required(),
    bio: Joi.string().max(200),
    address: Joi.string(),
    country: Joi.string(),
    phone: Joi.string().max(10),
    countryCode: Joi.string().max(3),
    password: Joi.string().min(6).max(30).required(),
    confirm_password: Joi.ref("password"),
  });
  return schema.validate(data);
};
