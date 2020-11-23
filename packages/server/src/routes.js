import { Router } from 'express';
import multer from 'multer';

import FileController from './app/controllers/FileController';

const routes = new Router();

const upload = multer({ dest: 'files/' });

routes.post('/upload', upload.single('file'), FileController.generatePdfFile);
routes.post('/markdown', FileController.downloadMarkdownFile);

export default routes;
