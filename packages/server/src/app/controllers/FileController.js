import markdownPdf from 'markdown-pdf';
import fs from 'fs';

import { httpClient, api } from '../utils';

const WAIT_FOR_RENDER_DELAY = 1500;

const options = {
  cssPath: `${__dirname}/../public/css/print.css`,
  highlightCssPath: `${__dirname}/../public/css/highlight.css`,
  paperBorder: '1cm',
  renderDelay: WAIT_FOR_RENDER_DELAY,
};

class FileController {
  async downloadMarkdownFile(req, res) {
    try {
      const { owner, repo, path } = req.body; // TODO: VALIDATE REQ BODY PARAMS

      console.log(
        'endpoints',
        `${api.github_api}/repos/${owner}/${repo}/contents/${path}`
      );

      const { data } = await httpClient().get(
        `${api.github_api}/repos/${owner}/${repo}/contents/${path}`
      );

      const payload = await httpClient().get(`${data.download_url}`);

      const markdownPath = `${__dirname}/../files/markdowns/${data.name}`;
      const pdfPath = `${__dirname}/../files/${data.name}.pdf`;

      fs.writeFileSync(markdownPath, payload.data);

      markdownPdf(options)
        .from(markdownPath)
        .to(pdfPath, () => {
          console.log('Done');
        });

      return res.status(200).json({ file: pdfPath });
    } catch (error) {
      return res.status(400).json(error.toString());
    }
  }
}

export default new FileController();
