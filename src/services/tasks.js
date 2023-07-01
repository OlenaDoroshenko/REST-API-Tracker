const { Task } = require("../models/tasksModel");
const { parameterError } = require("../helpers/customErrors");

const getAllTasks = async () => {
  const sortedTasks = await Task.find().sort("-createdAt");
  return sortedTasks;
};

const getTaskById = async (id) => {
  const task = await Task.findById(id);
  if (!task) {
    throw new parameterError("Task not found.");
  }
  return task;
};

const addTask = async (title, description, status = false) => {
  const newTask = new Task({ title, description, status });
  await newTask.save();
  return newTask;
};

const deleteTask = async (id) => {
  const removedTask = await Task.findByIdAndDelete(id);
  if (!removedTask) {
    throw new parameterError("Task not found.");
  }
  return removedTask;
};

const updateTask = async (id, title, description, status = false) => {
  console.log(status);
  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { title, description, status },
    { new: true }
  );
  if (!updatedTask) {
    throw new parameterError("Task not found.");
  }
  return updatedTask;
};

const updateStatus = async (id, status) => {
  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );
  if (!updatedTask) {
    throw new parameterError("Task not found.");
  }
  return updatedTask;
};

module.exports = {
  addTask,
  getAllTasks,
  getTaskById,
  deleteTask,
  updateStatus,
  updateTask,
};
