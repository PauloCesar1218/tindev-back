"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("./controllers/user"));
const routes = express_1.Router();
routes.get('/', (req, res) => {
    res.send('Hello World!!!');
});
routes.post('/developers/conversations/messages', user_1.default.getConversationMessages);
routes.post('/developers/conversations', user_1.default.getProfileConversations);
routes.post('/user/send_message', user_1.default.sendMessage);
routes.get('/developers/:id', user_1.default.getDevelopers);
routes.post('/user/insert', user_1.default.insertUser);
routes.post('/user/match', user_1.default.createMatch);
routes.post('/user/like', user_1.default.likeUser);
routes.post('/user/login', user_1.default.login);
routes.get('/users', user_1.default.getUsers);
exports.default = routes;
