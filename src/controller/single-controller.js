async function singleUpload(req, res) {
  try {
    res.status(200).json({
      message: "Uploaded",
      file: req.file,
    });
  } catch (err) {
    res.send(400);
  }
}

module.exports = {
  singleUpload,
};
