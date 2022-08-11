const router = require("express").Router();
const projectRouter = require("./project.routes");
const taskRouter = require("./task.routes");
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/projects", projectRouter);
router.use("/tasks", taskRouter);

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
