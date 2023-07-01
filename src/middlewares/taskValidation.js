const mongoose = require("mongoose");

const { body, validationResult } = require("express-validator");
const { validationError, parameterError } = require("../helpers/customErrors");

const taskValidationSchema = [
  body("title")
    .trim()
    .notEmpty()
    .isString()
    .isLength({ min: 5, max: 30 })
    .withMessage("The task must be at least 5 characters"),
  body("description").trim().isString(),
  body("status").trim().isBoolean().withMessage("The status must be boolean").optional(),
];

const statusValidationSchema = [
  body("status").trim().isBoolean().withMessage("The status is missing or not boolean"),
]

const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(new validationError("Validation failed", errors.array()));
  }
  next();
};

const idValidation = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    next(new parameterError(`Invalid ID`));
  }
  next();
};

module.exports = { taskValidationSchema, statusValidationSchema, validateResult, idValidation };
