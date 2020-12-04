const express = require("express");
const fetch = require("node-fetch");
/* const multer = require("multer");
 */ const router = express.Router();
const path = require("path");
const pdf = require("pdf-parse");
const fileUpload = require("express-fileupload");
const fs = require("fs");

router.use(fileUpload());

//File Model
const File = require("../../models/File");
const PdfParse = require("pdf-parse");

//@route GET api/Files/upload
//@desc Upload a File
//@access Public
//Upload Endpoint
router.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file Uploaded !" });
  }

  const file = req.files.file;

  // path to upload folder
  const path1 = `uploads\\${Date.now() + "-" + file.name}`;

  try {
    if (!file.name.match(/\.(pdf)$/)) {
      return res.status(500).json({ msg: "File is not a PDF !" });
    }

    // Check if file exists in upload folder?
    if (fs.existsSync(path1)) {
      return res.status(400).json({ msg: "File exists !" });

      // if not move it to upload folder
    } else {
      file.mv(path1, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }
        // res.json({ fileName: file.name, filePath: path1 });
      });

      fetch(`http://localhost:9000/process?path=${path1}`)
        .then((raw) => raw.json())
        .then((data) => {
          newFile = new File({
            name: path1,
            data: data,
          });

          newFile.save().then((result) => {
            console.log("Body : ", req.body);
            res.json(result);
          });
        });
    }
  } catch (error) {
    console.log(error);
  }
});

//@route GET api/Files
//@desc GET All Files
//@access Public
router.get("/", async (req, res) => {
  let data = [];
  await File.find().then(async (Files) => {
    for (i = 0; i < Files.length; i++) {
      const pdf_path = fs.readFileSync(Files[i].name);

      await PdfParse(pdf_path).then((info) => {
        /* res.send(info.text); */
        let temp = info.text;
        data.push(temp.split("\n"));

        // console.log(data);
      });
    }
    /*     console.log(data);
     */ res.send(data);
  });
});

//@route Upload api/Projects/upload-pdf
//@desc UPLOAD a file
/* router.post("/upload-pdf", (req, res) => {
    // 'profile_pic' is the name of our file input field in the HTML form
    let upload = multer({
      storage: storage,
      fileFilter: pdfFilter,
    }).single("profile_pdf");
  
    upload(req, res, function (err) {
      // req.file contains information of uploaded file
      // req.body contains information of text fields, if there were any
  
      if (req.fileValidationError) {
        return res.send(req.fileValidationError);
      } else if (!req.file) {
        return res.send(!!req.file);
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }
  
      // Display uploaded file for user validation
      res.send(`You have uploaded the CV`).then(() => {
        console.log("the cv is " + res.body);
      });
    });
  }); */

module.exports = router;
