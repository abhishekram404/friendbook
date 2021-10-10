const Joi = require("joi");

module.exports = updateValidator = (data) => {
  const schema = Joi.object({
    fullName: Joi.string().min(3).max(60),
    bio: Joi.string().max(200).allow(null, ""),
    address: Joi.string().max(50).allow(null, ""),
    country: Joi.string().max(20).allow(null, ""),
    phone: Joi.string().max(10).allow(null, ""),
    countryCode: Joi.string().max(3).allow(null, ""),
    mode: Joi.string().allow("default", "password"),
  });
  return schema.validate(data);
};
