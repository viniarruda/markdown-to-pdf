import { Router } from 'express';

import FileController from './app/controllers/FileController';

const routes = new Router();

routes.get('/health', FileController.transform);

export default routes;
