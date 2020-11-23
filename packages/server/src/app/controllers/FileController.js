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

      const { data, status } = await httpClient().get(
        `${api.github_api}/repos/${owner}/${repo}/contents/${path}`
      );

      // const payload = await httpClient().get(`${data.download_url}`);

      // console.log('payload:', payload);

      // fs.writeFile(`${name}`, payload, err => {
      //   if (err) {
      //     return console.log('error:', err);
      //   }

      //   return console.log('The file was saved!');
      // });

      // const fileReaded = fs.readFile(`${name}`, (err, readfileData) => {
      //   if (err) throw err;
      //   console.log(readfileData);
      // });

      // console.log('fileReaded', fileReaded);

      // markdownPdf(options)
      //   .from(payload)
      //   .to(`${__dirname}/../files/tranformed.pdf`, () => {
      //     console.log('Done');
      //   });

      // return res.status(200).json({ status, data });
      return res.status(200).json({ status, data });
    } catch (error) {
      return res.status(400).json(error.toString());
    }
  }

  generatePdfFile(req, res) {
    try {
      const { path, originalname } = req.file;

      const formattedName = originalname.split('.')[0];

      markdownPdf(options)
        .from(path)
        .to(`${__dirname}/../files/${formattedName}.pdf`, () => {
          console.log('Done');
        });

      return res.status(200).json({ status: 'Pdf created' });
    } catch (error) {
      return res.status(400).json(error.toString());
    }
  }
}

export default new FileController();
