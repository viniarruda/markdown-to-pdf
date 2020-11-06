import { Router } from 'express';

const routes = new Router();

routes.get('/health', 'ok');

export default routes;
