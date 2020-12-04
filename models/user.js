const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  pic:{
    type:String,
    // default:"https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png"
   },
});

module.exports = User = mongoose.model("User", UserSchema);
