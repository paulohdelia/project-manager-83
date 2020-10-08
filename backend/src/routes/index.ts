import { Router } from 'express';
import userRoutes from './user';
import clientRoutes from './client';
import sessionRoutes from './session';

const routes = Router();
const prefixRoutes = '/api/v1';

routes.get('/', (request, response) =>
  response.json({ message: 'Hello World!' }),
);

routes.use(`${prefixRoutes}/users`, userRoutes);
routes.use(`${prefixRoutes}/clients`, clientRoutes);
routes.use(`${prefixRoutes}/sessions`, sessionRoutes);

export default routes;
