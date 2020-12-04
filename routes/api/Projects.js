const express = require("express");
const router = express.Router();

//Project Model
const Project = require("../../models/Project");

//@route GET api/Projects
//@desc GET All Projects
//@access Public
router.get("/", (req, res) => {
  Project.find().then((Projects) => res.json(Projects));
});

//@route GET api/Projects/:id
//@desc GET a Project
//@access Public
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Project.findById(id)
    .select(" _id name entities description")
    .then((doc) => {
      res.json(doc);
      if (doc) {
        res /* .status(200) */
          .json({
            Project: doc,
          });
      } else {
        res.status(404).json({ message: "Not Found Id !" });
      }
    })
    .catch((err) => {
      console.log(err);
      // res.status(500).json({ error: err });
    });
});

//@route POST api/Projects
//@desc Create a Project
//@access Public
router.post("/", (req, res) => {
  newProject = new Project({
    name: req.body.name,
    entities: req.body.entities.split(","),
    description: req.body.description,
  });

  newProject.save().then((project) => {
    console.log("Body : ", req.body);
    res.json(project);
  });
});

//@route PUT api/Projects/:id
//@desc PUT a Project
//@access Public
router.put("/:id", (req, res) => {
  Project.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      Project.findOne({ _id: req.params.id })
        .then((Project) => {
          res.send(Project);
        })
        .catch((err) => res.json({ error: err }));
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});

//@route DELETE api/Projects/:id
//@desc DELETE a Project
//@access Public
/* router.delete("/:id", (req, res) => {
  Project.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
}); */

module.exports = router;
