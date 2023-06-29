const { body, validationResult} = require("express-validator");

const taskValidationSchema = [
    body('title').trim().notEmpty().isString().isLength( { min: 5, max: 30 }).withMessage("The task must be at least 5 characters"),
    body('description').trim().isString(),
    body('status').isBoolean().withMessage("The status must be boolean"),
];

const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ Message: "Validation failed", errors: errors.array() });
  }
  next();
};

module.exports = {taskValidationSchema, validateResult};
