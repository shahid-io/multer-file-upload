async function bulkUplaod(req, res) {
  try {
    return res.status(200).json({
      status: true,
      message: "Successfully Uploaded Bulk Files",
      file: req.files,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "Failed to upload",
      file: {},
    });
  }
}

module.exports = { bulkUplaod };
