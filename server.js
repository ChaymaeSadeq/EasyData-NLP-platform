const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

//Connect to Mongo db
mongoose
  .connect(
    "mongodb+srv://admin:" +
      process.env.MONGO_ATLAS_PW +
      "@cluster0.uyczk.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise; // for not having warnings

const Projects = require("./routes/api/Projects");
const Files = require("./routes/api/Files");
const Dictionnaries = require("./routes/api/Dictionnaries");
const Users = require("./routes/auth");

const app = express();

//BodyParser Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//Use Routes
app.use("/api/Projects", Projects);
app.use("/api/Files", Files);
app.use("/api/Dictionnaries", Dictionnaries);

app.use(express.json());
app.use("/auth", Users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
