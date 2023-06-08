const express = require("express");
const multer = require("multer");
var upload = multer({ dest: "uploads/" });
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Up" });
});

/**
 * To upload files
 */
app.post("/single", upload.single("profile"), (req, res) => {
  try {
    res.status(200).json({
      message: "Uploaded",
      file: req.file,
    });
  } catch (err) {
    res.send(400);
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

app.listen(3000, () => {
  console.log("Serving at http://localhost:3000");
});
