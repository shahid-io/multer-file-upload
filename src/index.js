const express = require("express");
const multer = require("multer");
var upload = multer({ dest: "uploads/" });
const { BulkUpload, SingleUpload } = require("./controller");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Up" });
});

/**
 * To upload files
 */
app.post("/single", upload.single("profile"), SingleUpload.singleUpload);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

app.post("/bulk", upload.array("profiles", 4), BulkUpload.bulkUplaod);

app.listen(3000, () => {
  console.log("Serving at http://localhost:3000");
});
