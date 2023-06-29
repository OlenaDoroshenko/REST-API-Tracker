const express = require("express");
const router = express.Router();
const { checkSchema } = require("express-validator");

const { asyncWrapper } = require("../helpers/apiHelpers");
const tasks = require("../controllers/tasksController");

const {taskValidationSchema, validateResult} = require("../middlewares/taskValidation");

router.post("/", taskValidationSchema, validateResult, asyncWrapper(tasks.addTaskController));

module.exports = { tasksRouter: router };
