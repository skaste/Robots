const express = require("express");
const router = express.Router();

//Get api robots
router.get("/", async (req, res, next) => {
  try {
    const robots = await getAllRobots();
    res.send(robots);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
