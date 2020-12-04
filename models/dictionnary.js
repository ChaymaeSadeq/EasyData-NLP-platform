const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const DictionnarySchema = new Schema({
  liste: {
    type: [Object],
    blackbox: true,
    required: true,
  },
});

module.exports = Dictionnary = mongoose.model("dictionnary", DictionnarySchema);
