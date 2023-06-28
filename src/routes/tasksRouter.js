const express = require("express");
const router = express.Router();

const { asyncWrapper } = require("../helpers/apiHelpers");
const tasks = require("../controllers/tasksController")

router.post("/", asyncWrapper(tasks.addTaskController));

module.exports = { tasksRouter: router };
