import { Router } from 'express';
import ClientController from '../controllers/ClientController';

const userRoutes = Router();
const clientController = new ClientController();

userRoutes.get('/', clientController.index);
userRoutes.post('/', clientController.create);

export default userRoutes;
