"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = __importDefault(require("./controllers/user"));
var routes = express_1.Router();
routes.get('/', function (req, res) {
    res.send('Hello World!!!');
});
routes.get('/users', user_1.default.getUsers);
routes.post('/user/insert', user_1.default.insertUser);
routes.post('/user/like', user_1.default.likeUser);
exports.default = routes;
