const mongoose = require("mongoose");
const Project = require("../models/Project.model");
const Task = require("../models/Task.model");
const router = require("express").Router();

router.post("/", (req, res, next) => {
  const { title, description } = req.body;

  Project.create({ title, description, tasks: [] })
    .then((value) => res.status(201).json(value))
    .catch((err) => {
      res.json(err);
    });
});

router.get("/", (req, res, next) => {
  Project.find()
    .populate("tasks")
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/:projectId", (req, res, next) => {
  const { projectId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Project.findById(projectId)
    .populate("tasks")
    .then((value) => res.json(value))
    .catch((err) => res.json(err));
});

router.put("/:projectId", (req, res, next) => {
  const { projectId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Project.findByIdAndUpdate(projectId, req.body, { new: true })
    .then((value) => {
      res.json(value);
    })
    .catch((err) => res.json(err));
});

router.delete("/:projectId", (req, res, next) => {
  const { projectId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Project.findByIdAndRemove(projectId)
    .then(() => {
      res.json({ message: `Deleted project with id ${projectId}` });
    })
    .catch((err) => res.json(err));
});

module.exports = router;
