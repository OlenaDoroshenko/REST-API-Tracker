const { Task } = require("../models/tasksModel");

const addTask = async(title, description, status = false) => {
    const newTask = new Task({title, description, status});
    await newTask.save();
    return newTask;
}

module.exports = {addTask}