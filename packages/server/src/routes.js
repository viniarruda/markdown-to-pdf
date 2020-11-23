import { Router } from 'express';

import FileController from './app/controllers/FileController';

const routes = new Router();

routes.post('/markdown', FileController.downloadMarkdownFile);

export default routes;
