const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const {errorHandler} = require("./helpers/apiHelpers")
const {tasksRouter} = require("./routes/tasksRouter");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());

app.use("/tasks", tasksRouter)

app.use(errorHandler)

module.exports = app;
 