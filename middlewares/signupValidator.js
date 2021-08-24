const Joi = require("joi");
module.exports = validator = (data) => {
  const schema = Joi.object({
    fullName: Joi.string().min(3).max(60).required(),
    username: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    gender: Joi.string().allow("male", "female", "other"),
    dob: Joi.date(),
    password: Joi.string().min(6).max(30).required(),
    confirm_password: Joi.ref("password"),
  });

  return schema.validate(data);
};
