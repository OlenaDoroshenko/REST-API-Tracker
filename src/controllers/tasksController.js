const tasks = require("../services/tasks");

const addTaskController = async(req,res) => {
    const {title, description, status} = req.body;
    const taskAdded = await tasks.addTask(title, description, status);
    res.status(201).json(taskAdded);
}

module.exports = {addTaskController}