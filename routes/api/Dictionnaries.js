const express = require("express");
const router = express.Router();

//Dictionnary Model
const Dictionnary = require("../../models/Dictionnary");

//@route POST api/Dictionnaries
//@desc Create a Dictionnary
//@access Public
router.post("/", (req, res) => {
  newDictionnary = new Dictionnary({
    liste: req.body,
  });

  newDictionnary.save().then(async (dictionnary) => {
    console.log("Body : ", req.body);
    res.json(dictionnary);
    console.log(dictionnary);
  });
});

//@route GET api/Dictionnaries
//@desc GET All Dictionnaries
//@access Public
router.get("/download", (req, res) => {
  Dictionnary.find().then((dictionnaries) => res.json(dictionnaries));
});

module.exports = router;
