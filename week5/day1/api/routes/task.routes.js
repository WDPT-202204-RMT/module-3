const router = require("express").Router();

const Task = require("../models/Task.model");
const Project = require("../models/Project.model");

router.post("/", (req, res, next) => {
  const { title, description, projectId } = req.body;

  Task.create({ title, description, project: projectId })
    .then((task) => {
      return Project.findByIdAndUpdate(
        projectId,
        {
          $push: { tasks: task._id },
        },
        { new: true }
      );
    })
    .then((value) => {
      res.json(value);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
