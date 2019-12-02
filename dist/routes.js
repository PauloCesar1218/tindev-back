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
routes.get('/users', user_1.default.getUsers);
routes.post('/user/insert', user_1.default.insertUser);
routes.post('/user/like', user_1.default.likeUser);
routes.post('/user/match', user_1.default.createMatch);
routes.post('/user/send_message', user_1.default.sendMessage);
routes.get('/developers', user_1.default.getDevelopers);
routes.post('/developers/conversations', user_1.default.getProfileConversations);
exports.default = routes;
