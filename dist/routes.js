"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("./controllers/user"));
const routes = express_1.Router();
routes.get('/users', user_1.default.getUsers);
routes.post('/user/insert', user_1.default.insertUser);
exports.default = routes;
