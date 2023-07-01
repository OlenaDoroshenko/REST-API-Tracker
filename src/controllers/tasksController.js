const tasks = require("../services/tasks");

const getTasksController = async (req, res) => {
  const allTasks = await tasks.getAllTasks();
  res.status(200).json(allTasks);
};

const getByIdController = async (req, res) => {
  const task = await tasks.getTaskById(req.params.id);
  res.status(200).json(task);
};

const addTaskController = async (req, res) => {
  const { title, description, status } = req.body;
  const taskAdded = await tasks.addTask(title, description, status);
  res.status(201).json(taskAdded);
};

const deleteTaskController = async(req, res) => {
  const removedTask = await tasks.deleteTask(req.params.id);
  res.status(200).json({"Deleted task": removedTask});
}

const updateTaskController = async (req, res) => {
  const { title, description, status } = req.body;
  const updatedTask = await tasks.updateTask(req.params.id, title, description, status);
  res.status(200).json(updatedTask);
};

const updateStatusController = async (req, res) => {
  const { status } = req.body;
  const updatedTask = await tasks.updateStatus(req.params.id, status);
  res.status(200).json(updatedTask);
};

module.exports = {
  addTaskController,
  getTasksController,
  getByIdController,
  deleteTaskController,
  updateStatusController,
  updateTaskController,
};
