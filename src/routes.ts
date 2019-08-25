import { Router } from 'express';
import userController from './controllers/user';

const routes = Router();

routes.get('/users', userController.getUsers);

routes.post('/user/insert', userController.insertUser);

routes.post('/user/like', userController.likeUser);

export default routes;