const express = require("express");
const router = express.Router();
const { getAllTasks, getTasksById } = require("../db");

router.get("/", async (res, req, next) => {
  try {
    const tasks = await getAllTasks();
    res.setEncoding(tasks);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const tasks = await getTasksById(req.params.id);
    res.send(routine);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
