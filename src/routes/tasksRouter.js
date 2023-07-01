const express = require("express");
const router = express.Router();

const { asyncWrapper } = require("../helpers/apiHelpers");
const tasks = require("../controllers/tasksController");

const {
  taskValidationSchema,
  statusValidationSchema,
  validateResult,
  idValidation,
} = require("../middlewares/taskValidation");

router.get("/", asyncWrapper(tasks.getTasksController));
router.get("/:id", idValidation, asyncWrapper(tasks.getByIdController));
router.post(
  "/",
  taskValidationSchema,
  validateResult,
  asyncWrapper(tasks.addTaskController)
);
router.delete("/:id", idValidation, asyncWrapper(tasks.deleteTaskController));
router.put(
  "/:id",
  idValidation,
  taskValidationSchema,
  validateResult,
  asyncWrapper(tasks.updateTaskController)
);
router.patch(
  "/:id",
  idValidation,
  statusValidationSchema,
  validateResult,
  asyncWrapper(tasks.updateStatusController)
);

module.exports = { tasksRouter: router };
