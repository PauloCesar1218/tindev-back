import { Router } from 'express';
import userController from './controllers/user';

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Hello World!!!');
});

routes.get('/users', userController.getUsers);

routes.post('/user/insert', userController.insertUser);

routes.post('/user/like', userController.likeUser);

routes.post('/user/match', userController.createMatch);

routes.post('/user/send_message', userController.sendMessage);

routes.get('/developers', userController.getDevelopers);

routes.post('/developers/conversations', userController.getProfileConversations);

export default routes;
