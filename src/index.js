const express = require("express");
const multer = require("multer");
var upload = multer({ dest: "uploads/" });
const { BulkUpload, SingleUpload } = require("./controller");
const app = express();

/**
 * GET : /
 * req.body : {}
 * req.params : {}
 */
app.get("/", (req, res) => {
  res.status(200).json({ message: "Up" });
});

/**
 * POST : /single
 * req.body : { file }
 * req.params : {}
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

/**
 *  POST : /bulk
 *  req.body : { files: [] }
 *  req.params : {}
 */
app.post("/bulk", upload.array("profiles", 4), BulkUpload.bulkUplaod);

app.listen(3000, () => {
  console.log("Serving at http://localhost:3000");
});
