import markdownPdf from 'markdown-pdf';

const WAIT_FOR_RENDER_DELAY = 1500;

const options = {
  cssPath: `${__dirname}/../public/css/print.css`,
  highlightCssPath: `${__dirname}/../public/css/highlight.css`,
  paperBorder: '1cm',
  renderDelay: WAIT_FOR_RENDER_DELAY,
};

class FileController {
  generatePdfFile(req, res) {
    try {
      const { path, originalname } = req.file;

      const formattedName = originalname.split('.')[0];

      markdownPdf(options)
        .from(path)
        .to(`${__dirname}/../../files/${formattedName}.pdf`, function() {
          console.log('Done');
        });

      return res.status(200).json({ status: 'Pdf created' });
    } catch (error) {
      return res.status(400).json(error.toString());
    }
  }
}

export default new FileController();
