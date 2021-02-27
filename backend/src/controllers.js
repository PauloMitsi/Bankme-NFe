module.exports = {
  upload(request, response) {
    return response.status(201).json({
      status: "success",
      file: request.file
    });
  }
}