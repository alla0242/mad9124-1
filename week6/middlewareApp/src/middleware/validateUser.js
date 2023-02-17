const joi = require("joi");

const schema = joi
  .object({
    firstName: joi.string().alphanum().min(3).max(30).required(),
    lastName: joi.string().alphanum().min(3).max(15),
    email: joi.string().email({
      minDomainSegments: 3,
      tlds: {
        allow: ["com", "ca", "org"],
      },
    }),
    phoneNumber: joi.string().pattern(/\d{3}-\d{3}-\d{4}/),
    age: joi.number().min(7),
    password: joi.string().min(8),
    confirmPassword: joi.string().min(8),
  })
  .with("password", "confirmPassword");

const validateUser = (req, res, next) => {
  const inValid = schema.validate(req.body);
  console.log("i", inValid);
  if (inValid.error) {
    res.status(400).json({
      error: inValid.error.message,
    });
    return;
  }
  req.user = inValid.value
  next();
};

module.exports = validateUser;
