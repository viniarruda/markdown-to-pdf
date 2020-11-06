class FileController {
  transform(req, res) {
    try {
      return res.status(200).json({ status: 'ok' });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new FileController();
