const express = require("express");
const router = express.Router();
const { getAllRobots, getRobotById } = require("../db");

//Get api robots
router.get("/", async (req, res, next) => {
  try {
    const robots = await getAllRobots();
    res.send(robots);
  } catch (err) {
    next(err);
  }
});

//get api/robots by id
router.get("/:id", async (req, res, next) => {
  try {
    const robots = await getRobotById(req.params.id);
    res.send(routine);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
