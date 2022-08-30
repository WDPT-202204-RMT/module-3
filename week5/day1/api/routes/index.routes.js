const router = require("express").Router();
const projectRouter = require("./project.routes");
const taskRouter = require("./task.routes");
const authRouter = require("./auth.routes");
const { isAuthenticated } = require("../middleware/jwt.middleware");
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/projects", isAuthenticated, projectRouter);
router.use("/tasks", taskRouter);
router.use("/auth", authRouter);

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
