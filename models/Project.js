const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  entities: {
    type: Array,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

module.exports = Project = mongoose.model("Project", ProjectSchema);
